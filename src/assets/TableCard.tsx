import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import { Button } from "../components/ui/button";
import type { Todo } from "@/types";

type Props = {
  data: Todo[];
  onEdit: (todo: Todo) => void;
  onDelete: (id: number) => void;
};

export function TableDemo({ data, onEdit, onDelete }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Images</TableHead>
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
            <TableCell>
              { e.images.map((img) => img.imageName)}
                
            </TableCell>

            <TableCell>{e.name}</TableCell>

            <TableCell>{e.description}</TableCell>

            <TableCell>
              {e.isCompleted ? "Completed" : "Not Completed"}
            </TableCell>

            <TableCell>
              <div className="flex gap-2">
                <Button onClick={() => onEdit(e)} type="button">
                  Edit
                </Button>

                <Button
                  onClick={() => onDelete(e.id)}
                  type="button"
                  variant="destructive"
                >
                  Delete
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}

       
      </TableBody>
    </Table>
  );
}
