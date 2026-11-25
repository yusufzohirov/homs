import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

export type Todo = {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
};

type Props = {
  data: Todo[];
  onEdit: (todo: Todo) => void;
  onDelete: (id: number) => void;
};

export function TableDemo({
  data,
  onEdit,
  onDelete,
}: Props) {
  const [info, setInfo] = useState<Todo | null>(null);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((e) => (
            <TableRow key={e.id}>
              <TableCell>{e.id}</TableCell>
              <TableCell>{e.name}</TableCell>
              <TableCell>{e.description}</TableCell>

              <TableCell>
                {e.isCompleted ? "Completed" : "Not Completed"}
              </TableCell>

              <TableCell>
                <Button onClick={() => onEdit(e)}>
                  Edit
                </Button>

                <Button onClick={() => setInfo(e)}>
                  Info
                </Button>

                <Button onClick={() => onDelete(e.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog
        open={info !== null}
        onOpenChange={(value) => {
          if (!value) setInfo(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Todo Information</DialogTitle>
          </DialogHeader>

          {info && (
            <div style={{ display: "grid", gap: "12px" }}>
              <p>ID: {info.id}</p>
              <p>Name: {info.name}</p>
              <p>Description: {info.description}</p>
              <p>
                Status: {info.isCompleted ? "Completed" : "Not Completed"}
              </p>
            </div>
          )}

          <Button onClick={() => setInfo(null)}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
