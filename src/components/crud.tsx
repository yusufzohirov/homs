import { useState } from "react";
import type { User } from "../types";

function Crud() {
 const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ]);
  
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);
    
    const [isDialogOpen, setIsDialogOpen] = useState(false);











  

  const openAddDialog = () => {
    setName("");
    setAge("");
    setEditingId(null);
    setIsDialogOpen(true);
  }


  const openEditDialog = (user: User) => {
    setName(user.name);
    setAge(user.age.toString());
    setEditingId(user.id);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setName("");
    setAge("");
    setEditingId(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();



    const ageNumber = Number(age);
    if (ageNumber <= 0 || ageNumber > 120) {
      alert("stop rading >120");
      return;
    }

    if (editingId !== null) {
      setUsers(
        users.map((user) =>
          user.id === editingId ? { ...user, name: name, age: ageNumber } : user
        )
      );
    } else {
      const newUser: User = {
        id: Date.now(),
        name: name,
        age: ageNumber,
      };
      setUsers([...users, newUser]);
    }

    closeDialog(); 
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const dialogStyle: React.CSSProperties = {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "450px", marginBottom: "20px" }}>
        <h1 style={{ margin: 0 }}>Users CRUD</h1>
        <button 
          onClick={openAddDialog}
          style={{ padding: "8px 15px", cursor: "pointer", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", fontWeight: "bold" }}
        >
          New User
        </button>
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "450px",
              gap: "10px",
              flexWrap: "wrap"
            }}
          >
            <span style={{ wordBreak: "break-word" }}>
              <strong>{user.name}</strong> — {user.age} сола
            </span>
            <div style={{ display: "flex", gap: "5px" }}>
              <button
                onClick={() => openEditDialog(user)}
                style={{ padding: "5px 10px", cursor: "pointer" }}
              >
                Edit
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                style={{ padding: "5px 10px",  cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isDialogOpen && (
        <div style={overlayStyle}>
          <div style={dialogStyle}>

            <h2 style={{ margin: 0, textAlign: "center" }}>
              {editingId !== null ? "Add user" : "Edit user"}
            </h2>
            
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input
                type="text"
                placeholder="name...."
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
              />
              
              <input
                type="number"
                placeholder="age..."
                value={age}
                onChange={(e) => setAge(e.target.value)}
                style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
              />

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
                <button
                  type="button"
                  onClick={closeDialog}
                  style={{ padding: "8px 15px", backgroundColor: "#f8f9fa", border: "1px solid #ccc", borderRadius: "4px" }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  style={{ padding: "8px 15px", cursor: "pointer", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", fontWeight: "bold" }}
                >
                  {editingId !== null ? "Edit user" : "Add user"}
                </button>
              </div>
            </form>
          </div>
        </div>

      )}
    </div>
  );
}

export default Crud;