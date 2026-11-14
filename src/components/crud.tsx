import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function Crud() {
  const [data, setData] = useState([
    { id: 1, name: "Ali", age: 23 },
    { id: 2, name: "Vali", age: 23 },
    { id: 3, name: "Gani", age: 23 },
  ]);

  const [dialog, setDialog] = useState(false);
  const [elem, setElem] = useState<any>(null);
  const [search, setSearch] = useState("");

  const handldelete = (id: number) => {
    setData((prev) => prev.filter((e) => e.id !== id));
  };

  const handleAdd = (event: any) => {
    event.preventDefault();

    const newUser = {
      id: elem?.id ? elem.id : Date.now(),
      name: event.target.name.value,
      age: Number(event.target.age.value),
    };

    if (elem?.id) {
      setData((prev) => prev.map((e) => (e.id === elem.id ? newUser : e)));
    } else {
      setData((prev) => [...prev, newUser]);
    }

    setElem(null);
    setDialog(false);
  };

  return (
    <>
      <Button
        onClick={() => {
          setElem(null);
          setDialog(true);
        }}
      >
        Add
      </Button>
     <Input
  placeholder="Search name..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-60"
/>

      <Dialog open={dialog} onOpenChange={setDialog}>
        <DialogContent>
          <form onSubmit={handleAdd}>
            <DialogHeader>
              <DialogTitle>{elem ? "Edit User" : "Add User"}</DialogTitle>
            </DialogHeader>

            <FieldGroup>
              <Field>
                <Label>Name</Label>
                <Input
                  placeholder="Enter name"
                  name="name"
                  defaultValue={elem?.name || ""}
                  required
                />
              </Field>

              <Field>
                <Label>Age</Label>
                <Input
                  type="number"
                  placeholder="Enter age"
                  name="age"
                  defaultValue={elem?.age || ""}
                  required
                />
              </Field>
            </FieldGroup>

            <DialogFooter className="mt-5">
              <DialogClose render={<Button variant="outline" type="button" />}>
                Cancel
              </DialogClose>

              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <div className="flex flex-wrap p-10 gap-10">
        {data
          .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
          .map((e) => (
            <Card key={e.id} className="w-70">
              <CardContent>
                <h1>{e.name}</h1>
                <p>{e.age}</p>

                <div className="flex gap-2">
                  <Button onClick={() => handldelete(e.id)}>Delete</Button>

                  <Button
                    onClick={() => {
                      setElem(e);
                      setDialog(true);
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
}

export default Crud;
