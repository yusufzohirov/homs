import { useState } from "react";
import handleSelect from "./function";

import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Paper,
  ThemeProvider,
  createTheme,
  CssBaseline,
  listItemClasses,
} from "@mui/material";

function Crud() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Ali",
      select: false,
      age: 22,
      img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
    },
    {
      id: 2,
      name: "Vali",
      select: false,
      age: 56,
      img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
    },
    {
      id: 3,
      name: "Gani",
      select: false,
      age: 77,
      img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
    },
    {
      id: 4,
      name: "Muhammad",
      select: false,
      age: 45,
      img: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
    },
  ]);

  const [Dioalog, setDialog] = useState(false);
  const [elem, setElem] = useState({
    id: null as Number|null,
    img: "",
    name: "",
    age: "",
    select: false,
  });

  const handleDelete = (id: number) => {
    setData((prev) => prev.filter((e) => e.id !== id));
  };

  const handlSubmit = (event: any) => {
    event.preventDefault();
    const newUser = {
      id: elem.id ? elem.id : Date.now(),
      img: event.target.img.value,
      name: event.target.name.value,
      age: event.target.age.value,
      select: event.target.select.value == "true" ? true : false,
    };
    elem.id
      ? setData((prev) => prev.map((e) => (e.id == elem.id ? newUser : e)))
      : setData([...data, newUser]);
    setDialog(false);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setDialog(true)}>
        New Add
      </Button>

      {Dioalog ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <form
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            action=""
            onSubmit={handlSubmit}
          >
            <h2 className="mb-5 text-2xl font-bold text-gray-800">New User</h2>
            <div className="flex flex-col gap-4">
              <input
                defaultValue={elem.img}
                type="text"
                name="img"
                placeholder="Enter img...."
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
              />
              <input
                defaultValue={elem.name}
                type="text"
                name="name"
                placeholder="Enter name...."
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
              />
              <input
                defaultValue={elem.age}
                type="text"
                name="age"
                placeholder="Enter age...."
                className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
              />
              <select
                defaultChecked
                name="select"
                id=""
                className="w-full rounded-lg border border-gray-300 p-3 outline-none"
              >
                <option defaultValue={elem.img} value="false">
                  Inactive
                </option>
                <option defaultValue={elem.img} value="true">
                  Active
                </option>
              </select>
              <div className="flex gap-10">
                <Button type="submit" variant="contained">
                  Save
                </Button>
                <Button variant="outlined" onClick={() => setDialog(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </div>
      ) : null}

      <div className="flex flex-wrap gap-10 p-10">
        {data.map((e) => {
          return (
            <Box className="w-75 border p-5 rounded-xl">
              <img src={e.img} alt="" width={"80"} />
              <Typography>{e.name}</Typography>
              <Typography>{e.age}</Typography>
              <Checkbox
                checked={e.select}
                onChange={() => setData(handleSelect(data, e.id))}
              />
              <div className="flex gap-3">
                <Button
                  onClick={() => handleDelete(e.id)}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setDialog(true);
                    setElem(e);
                  }}
                >
                  Edit
                </Button>
              </div>
            </Box>
          );
        })}
      </div>
    </>
  );
}

export default Crud;
