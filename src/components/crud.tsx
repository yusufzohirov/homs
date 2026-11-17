import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import axios from "axios";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Checkbox } from "./ui/checkbox";

function Crud() {
  const api = "https://6ace4236f338359cf1c35796.mockapi.io/data";
  const [data, setData] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [search, setSearch] = useState("");
  const [elem, setElem] = useState({});
  const [idx, setIdx] = useState(null);
  const [status, setStatus] = useState("All");

  const handlSubmit = (event: any) => {
    event.preventDefault();
    const newUser = {
      id: elem.id ? elem.id : Date.now(),
      name: event.target.name.value,
      avatar: event.target.img.value,
      age: event.target.age.value,
      status: status==="true",
    };

    if (idx !==null) {
      editUser(idx, newUser);
    } else {
      addUser(newUser);
    }
  };

  interface obj {
    id: number;
    name: string;
    age: number;
    avatar: string;
  }

  useEffect(() => {
    getData();
  }, []);

  //  fuction
  async function getData() {
    try {
      const { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function deletData(id) {
    try {
      await axios.delete(`${api}/${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  async function addUser(newuser) {
    try {
      await axios.post(api, newuser);
      getData();
      setDialog(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function editUser(idx, newuser) {
    try {
      await axios.put(`${api}/${idx}`, newuser);
      getData();
      setDialog(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="flex w-120 gap-20 p-10">
        <Input
          placeholder="Searched..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

<select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="All">All</option>
              <option value="false">Inactive</option>
              <option value="true">Active</option>
            </select>

        <Button onClick={() => {setDialog(true);setIdx(null);setElem({});setStatus("All")}}>New</Button>
      </div>

      <Dialog open={dialog} onOpenChange={setDialog}>
        <DialogContent>
          <form action="" onSubmit={handlSubmit}>
            <Input
              defaultValue={elem.avatar}
              name="img"
              placeholder="Image..."
            />
            <Input defaultValue={elem.name} name="name" placeholder="Name..." />
            <Input defaultValue={elem.age} name="age" placeholder="Age..." />

            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="All">All</option>
              <option value="false">Inactive</option>
              <option value="true">Active</option>
            </select>

            <div>
              <Button type="submit">Save</Button>
              <Button onClick={() => setDialog(false)}>Cancel</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <div className="flex flex-wrap p-10 gap-10">
        {data
          .filter((e)=> e.name.toLowerCase().includes(search.toLowerCase()))
          .filter((e)=> status==="All" || String(e.status)===status)
          .map((e) => {
            return (
              <Card key={e.id}>
                <CardContent>
                  <img src={e.avatar} alt="" className="w-40" />
                  <h1>{e.name}</h1>
                  <p>{e.age}</p>
                  <Checkbox
                    checked={e.status}
                    onCheckedChange={async () => {
                      await axios.put(`${api}/${e.id}`, {
                        ...e,
                        status: !e.status,
                      });
                      getData();
                    }}
                  />
                  <div>
                    <Button onClick={() => deletData(e.id)}>Delete</Button>
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
