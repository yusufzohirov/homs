import React, { useEffect, useState } from "react";

import axios from "axios";
import {
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "./ui/table";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dialog, DialogContent } from "./ui/dialog";

function Crud() {
  const api = "https://6ace4236f338359cf1c35796.mockapi.io/data";

  const [data, setData] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [elem, setElem] = useState(null);
  const [idx, setIdx] = useState(null);
  const [serch, setSearch] = useState("");
  const [status, setstatus] = useState(null);
  const [serchStatus, setSerachStatus] = useState("");
  const [info, setInfo] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`${api}/${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  const handlSaubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: elem.id ? elem.id : Date.now,
      avatar: event.target.img.value,
      name: event.target.name.value,
      age: event.target.age.value,
      city: event.target.city.value,
      email: event.target.email.value,
      status: event.target.selectStatus.value === "true",
    };
    if (elem) {
      editData(newUser, idx);
    } else {
      addData(newUser);
    }
  };

  async function addData(user) {
    try {
      await axios.post(api, user);
      getData();
      setDialog(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function editData(user, idx) {
    try {
      await axios.put(`${api}/${idx}`, user);
      getData();
      setDialog(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="p-10 flex gap-10 w-120">
        <Button onClick={() => setDialog(true)}>New Add</Button>
        <Input
          placeholder="Searchesd..."
          value={serch}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          name="selectStatus"
          value={serchStatus}
          onChange={(e) => {
            (setSerachStatus(e.target.value), console.log(e.target.value));
          }}
        >
          <option value="">All</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </div>




     <Dialog open={info} onOpenChange={setInfo}>
                    <DialogContent>
                      {data.map((e)=>{
                        return(
                          <div>
                            <h1>{e.name}</h1>
                          </div>
                        )
                      })}
                    </DialogContent>
                  </Dialog>



      <Dialog open={dialog} onOpenChange={setDialog}>
        <DialogContent>
          <form onSubmit={handlSaubmit}>
            <Input
              defaultValue={elem?.avatar || ""}
              name="img"
              placeholder="Image..."
            />
            <Input
              defaultValue={elem?.name || ""}
              name="name"
              placeholder="name..."
            />
            <Input
              defaultValue={elem?.age || ""}
              name="age"
              placeholder="age..."
            />
            <Input
              defaultValue={elem?.city || ""}
              name="city"
              placeholder="city..."
            />
            <Input
              defaultValue={elem?.email || ""}
              name="email"
              placeholder="email..."
            />

            <select name="selectStatus">
              <option value="">All</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>

            <div>
              <Button type="submit">Save</Button>
              <Button onClick={() => setDialog(false)}>Cancel</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Table className="p-10">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data
            .filter((e) => {
              if (serchStatus == String(e.status)) {
                return e;
              }
              if (serchStatus == "") {
                return e;
              }
            })
            .filter((e) => e.name.toLowerCase().includes(serch.toLowerCase()))
            .map((e) => (
              <TableRow key={e.id}>
                <TableCell>
                  <img src={e.avatar} className="w-20" alt="" />
                </TableCell>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.age}</TableCell>
                <TableCell>{e.city}</TableCell>
                <TableCell>{e.email}</TableCell>
                <TableCell>{e.status ? "Active" : "Inactive"}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      setDialog(true);
                      setElem(e);
                      setIdx(e.id);
                    }}
                  >
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(e.id)}>Delete</Button>
                  <Button onClick={() => setInfo(true)}>Info</Button>

                 

                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Crud;
