
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dialog, DialogContent } from "./ui/dialog";

import { TableDemo, type Todo } from "../assets/TableCard";

function RhfPage() {
  const api = "https://to-dos-api.softclub.tj";

  const [data, setData] = useState<Todo[]>([]);
  const [dialog, setDialog] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const { register, handleSubmit, reset } = useForm<{
    name: string;
    description: string;
  }>();

  async function getData() {
    try {
      const res = await axios.get(`${api}/api/to-dos`);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function handleAdd() {
    setEditId(null);
    reset({
      name: "",
      description: "",
    });
    setDialog(true);
  }

  function handleEdit(todo: Todo) {
    setEditId(todo.id);

    reset({
      name: todo.name,
      description: todo.description,
    });

    setDialog(true);
  }

  async function saveData(values: {
    name: string;
    description: string;
  }) {
    try {
      if (editId !== null) {
        await axios.put(`${api}/api/to-dos`, {
          id: editId,
          name: values.name,
          description: values.description,
        });
      } else {
        const formData = new FormData();

        formData.append("Name", values.name);
        formData.append("Description", values.description);

        await axios.post(`${api}/api/to-dos`, formData);
      }

      await getData();
      setDialog(false);
      setEditId(null);
      reset();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteData(id: number) {
    try {
      await axios.delete(`${api}/api/to-dos`, {
        params: { id },
      });

      await getData();
    } catch (error) {
      console.log(error);
    }
  }

  const filteredData = data.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div style={{ display: "flex", gap: "8px" }}>
        <Button type="button" onClick={handleAdd}>
          New Add
        </Button>

        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Dialog open={dialog} onOpenChange={setDialog}>
        <DialogContent>
          <form
            onSubmit={handleSubmit(saveData)}
            style={{ display: "grid", gap: "12px" }}
          >
            <Input
              placeholder="Name..."
              {...register("name", { required: true })}
            />

            <Input
              placeholder="Description..."
              {...register("description", { required: true })}
            />

            <Button type="submit">
              {editId === null ? "Save" : "Update"}
            </Button>

            <Button
              type="button"
              onClick={() => {
                setDialog(false);
                setEditId(null);
                reset();
              }}
            >
              Cancel
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <TableDemo
        data={filteredData}
        onEdit={handleEdit}
        onDelete={deleteData}
      />
    </>
  );
}

export default RhfPage;
