import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import type { Todo } from "@/types";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dialog, DialogContent } from "./ui/dialog";
import { TableDemo } from "../assets/TableCard";

type TodosResponse = {
  data: Todo[];
  errors: unknown[];
  statusCode: number;
};

type TodoFormValues = {
  name: string;
  description: string;
  images?: FileList;
};

function RhfPage() {
  const api = "https://to-dos-api.softclub.tj";

  const [data, setData] = useState<Todo[]>([]);

  const [dialog, setDialog] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [search, setSearch] = useState("");



   const {register,handleSubmit,reset}=useForm<TodoFormValues>({
      defaultValues:{
        name:"",
        description:""
      }
   })










  // GET

  async function getData() {
    try {
        
        const res=await axios.get<TodosResponse>(`${api}/api/to-dos`)
    
        setData(res.data.data)
    } catch (error) {
        console.error(error);
        
    }
  }

  useEffect(() => {
    getData();
  }, []);










  // ADD
  function handleAdd() {
    setEditId(null);
    reset();
    setDialog(true);
  }

  // EDIT
  function handleEdit(e: Todo) {
    setEditId(e.id);

    reset({
      name: e.name,
      description: e.description,
    });

    setDialog(true);
  }

const filteredData = data.filter((e) =>
  e.name.toLowerCase().includes(search.toLowerCase()) ||
  e.description.toLowerCase().includes(search.toLowerCase())
);

  // POST + PUT
  async function saveData(values: TodoFormValues) {
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

        Array.from(values.images || []).forEach((img) => {
          formData.append("Images", img);
        });

        await axios.post(`${api}/api/to-dos`, formData);
      }

      getData();

      setDialog(false);
      setEditId(null);

      reset({
        name: "",
        description: "",
        images: undefined,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // DELETE
  async function deleteData(id: number) {
    try {
      await axios.delete(`${api}/api/to-dos`, {
        params: { id },
      });

      getData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <Button onClick={handleAdd}>New Add</Button>
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Dialog
        open={dialog}
        onOpenChange={(open) => {
          setDialog(open);

          if (!open) {
            setEditId(null);
            reset({
              name: "",
              description: "",
              images: undefined,
            });
          }
        }}
      >
        <DialogContent>
          <form onSubmit={handleSubmit(saveData)} className="space-y-3">
            <Input placeholder="Name..." {...register("name")} />

            <Input placeholder="Description..." {...register("description")} />

            {editId === null && (
              <Input
                type="file"
                accept="image/*"
                multiple
                {...register("images")}
              />
            )}

            <Button type="submit">{editId === null ? "Save" : "Update"}</Button>

            <Button
              type="button"
              onClick={() => {
                setDialog(false);
                setEditId(null);
                reset();
              }}
              variant="outline"
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
