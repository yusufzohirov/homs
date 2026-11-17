
import { useEffect, useState, type FormEvent } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type User = {
  id: number | string;
  name: string;
  avatar: string;
  age: string;
  status: string;
};

function Crud() {
  const api = "https://6ace4236f338359cf1c35796.mockapi.io/data";

  const [data, setData] = useState<User[]>([]);
  const [dialog, setDialog] = useState(false);
  const [status, setStatus] = useState("");
  const [elem, setEelem] = useState<User | null>(null);
  const [idx, setIdx] = useState<number | string | null>(null);

  async function getData() {
    try {
      const res = await axios.get(api);
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function deletData(id: number | string) {
    try {
      await axios.delete(`${api}/${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  const handlSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newUser = {
      id: elem ? elem.id : Date.now(),
      name: String(formData.get("name")),
      avatar: String(formData.get("avatar")),
      age: String(formData.get("age")),
      status: status,
    };

    if (elem && idx !== null) {
      editUser(newUser, idx);
    } else {
      addData(newUser);
    }
  };

  async function addData(user: any) {
    try {
      await axios.post(api, user);
      getData();
      setDialog(false);
      setEelem(null);
      setStatus("");
    } catch (error) {
      console.error(error);
    }
  }

  async function editUser(newuser: any, idx: number | string) {
    try {
      await axios.put(`${api}/${idx}`, newuser);
      getData();
      setDialog(false);
      setEelem(null);
      setIdx(null);
      setStatus("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="flex w-full items-center justify-center p-10 gap-10">
        <Input placeholder="Searched...." />

        <Button
          onClick={() => {
            setEelem(null);
            setIdx(null);
            setStatus("");
            setDialog(true);
          }}
        >
          New Add
        </Button>
      </div>

      <Dialog open={dialog} onOpenChange={setDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{elem ? "Edit User" : "New Add"}</DialogTitle>
          </DialogHeader>

          <form onSubmit={handlSubmit}>
            <Input
              name="avatar"
              placeholder="Image..."
              defaultValue={elem?.avatar || ""}
            />

            <Input
              name="name"
              placeholder="Name..."
              defaultValue={elem?.name || ""}
            />

            <Input
              name="age"
              placeholder="Age..."
              defaultValue={elem?.age || ""}
            />

            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>

            <div>
              <Button type="button" onClick={() => setDialog(false)}>
                Cancel
              </Button>

              <Button type="submit">Save</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <div className="flex flex-wrap gap-10 p-10">
        {data.map((e) => {
          return (
            <Card className="w-60" key={e.id}>
              <CardContent>
                <img className="w-40" src={e.avatar} alt="" />

                <h1>{e.name}</h1>
                <p>{e.age}</p>

                <Checkbox checked={e.status === "Active"} />

                <div>
                  <Button onClick={() => deletData(e.id)}>
                    Delete
                  </Button>

                  <Button
                    onClick={() => {
                      setDialog(true);
                      setEelem(e);
                      setIdx(e.id);
                      setStatus(e.status);
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Crud;
