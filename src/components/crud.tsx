import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "./ui/input";
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

function Crud() {
    const api = "https://6ace4236f338359cf1c35796.mockapi.io/data";
    const [search, setSearch] = useState("");

  const [dialog, setDialog] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [elem, setElem] = useState<any>({});
  const [idx, setIdx] = useState<any>(null);
  const [status, setStatus] = useState("true");

  async function getData() {
    try {
      const { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleSabmit = (event: any) => {
    event.preventDefault();

    const newUser = {
      name: event.target.name.value,
      age: event.target.age.value,
      avatar: event.target.avatar.value,
      status: status === "true",
    };

    if (idx === null) {
      addUser(newUser);
    } else {
      editUser(idx, newUser);
    }

    setDialog(false);
    setIdx(null);
    setElem({});
    setStatus("true");
  };

  async function addUser(newUser: any) {
    try {
      await axios.post(api, newUser);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  async function DeleteUser(id: string) {
    try {
      await axios.delete(`${api}/${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  async function editUser(idx: string, newUser: any) {
    try {
      await axios.put(`${api}/${idx}`, newUser);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="w-100 p-10 flex gap-10">
        <Input
          placeholder="Search name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button
          onClick={() => {
            setElem({});
            setIdx(null);
            setStatus("true");
            setDialog(true);
          }}
        >
          New Add
        </Button>
      </div>

      <Dialog open={dialog} onOpenChange={setDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New User</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSabmit}>
            <Input
              defaultValue={elem.avatar}
              name="avatar"
              placeholder="Image"
            />

            <Input defaultValue={elem.name} name="name" placeholder="Name" />

            <Input defaultValue={elem.age} name="age" placeholder="Age" />

            <br />
            <br />

            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="true">Active</SelectItem>
                <SelectItem value="false">Inactive</SelectItem>
              </SelectContent>
            </Select>

            <br />

            <Button type="submit">Save</Button>
          </form>
        </DialogContent>
      </Dialog>

      <div className="flex flex-wrap gap-10 p-20">
        {data
          .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
          .map((e) => {
            return (
              <Card key={e.id} className="w-100">
                <CardContent>
                  <img src={e.avatar} alt="" className="w-70 h-70" />

                  <h1>{e.name}</h1>
                  <p>{e.age}</p>

                  <Checkbox checked={e.status} disabled />

                  <div>
                    <Button
                      onClick={() => DeleteUser(e.id)}
                      variant="destructive"
                    >
                      Delete
                    </Button>

                    <Button
                      onClick={() => {
                        setDialog(true);
                        setElem(e);
                        setIdx(e.id);
                        setStatus(String(e.status));
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
