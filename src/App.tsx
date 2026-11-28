import {
  createContext,
  useContext,
  useReducer,
  useRef,
  useState,
} from "react";

const initialState = {
  todos: [],
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "edit":
      return {
        ...state,
        todos: state.todos.map((e: any) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case "delete":
      return {
        ...state,
        todos: state.todos.filter(
          (e: any) => e.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

const TodosContext = createContext<any>(null);

function TodosProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

function TodosContent() {
  const { state, dispatch } = useContext(TodosContext);

  const [name, setName] = useState("");
  
  const [description, setDescription] = useState("");

  const [editId, setEditId] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: any) {
    e.preventDefault();

    if (!name.trim() || !description.trim()) return;

    if (editId !== null) {
      const todo = state.todos.find((e: any) => e.id === editId);

      dispatch({
        type: "edit",
        payload: {
          ...todo,
          name,
          description,
        },
      });

      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        name,
        description,
        isCompleted: false,
      };

      dispatch({
        type: "add",
        payload: newTodo,
      });
    }

    setName("");
    setDescription("");
    inputRef.current?.focus();
  }

  function handleEdit(todo: any) {
    setEditId(todo.id);
    setName(todo.name);
    setDescription(todo.description);
    inputRef.current?.focus();
  }

  function handleDelete(id: number) {
    dispatch({
      type: "delete",
      payload: id,
    });

    if (editId === id) {
      setEditId(null);
      setName("");
      setDescription("");
    }
  }

  return (
    <div>
      <h1>Todo CRUD</h1>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">
          {editId !== null ? "Update" : "Add"}
        </button>
      </form>

      {state.todos.map((e: any) => (
        <div key={e.id}>
          <h3>{e.name}</h3>
          <p>{e.description}</p>

          <input
            type="checkbox"
            checked={e.isCompleted}
            onChange={() =>
              dispatch({
                type: "edit",
                payload: {
                  ...e,
                  isCompleted: !e.isCompleted,
                },
              })
            }
          />

          <span>
            {e.isCompleted ? "Completed" : "Not Completed"}
          </span>

          <button onClick={() => handleEdit(e)}>
            Edit
          </button>

          <button onClick={() => handleDelete(e.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default function Todos() {
  return (
    <TodosProvider>
      <TodosContent />
    </TodosProvider>
  );
}