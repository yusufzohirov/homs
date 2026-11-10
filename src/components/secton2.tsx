import { useState } from "react";

import box1 from "../assets/box1.svg";
import box2 from "../assets/box2.svg";
import box3 from "../assets/box3.svg";

function Section2() {
  const [dialog, setDialog] = useState(false);

  const [users, setUsers] = useState([
    { id: 1, img: box1, job: "Front-End Developer" },
    { id: 2, img: box2, job: "Back-End Developer" },
    { id: 3, img: box3, job: "UI/UX Designer" },
  ]);

  const delUser = (id: number) => {
    setUsers(users.filter((e) => e.id !== id));
  };

  return (
    <section className="p-10">
      <button
        className="w-30 bg-[#608AF5] p-2 rounded-2xl"
        onClick={() => setDialog(true)}
      >
        New Add
      </button>

      {dialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-5 rounded-2xl w-full max-w-sm">
            <input
              type="text"
              placeholder="Enter Job"
              className="inp border p-2 rounded-xl w-full"
            />
            <input
              type="text"
              placeholder="Enter Img"
              className="inp border p-2 rounded-xl w-full"
            />

            <div className="flex gap-3 mt-5">
              <button className="bg-blue-500 p-2 rounded-xl text-white flex-1">
                Add
              </button>

              <button
                onClick={() => setDialog(false)}
                className="bg-red-500 p-2 rounded-xl text-white flex-1"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
        {users.map((e) => (
          <div key={e.id}>
            <img src={e.img} alt="" />

            <h2>{e.job}</h2>

            <div className="flex gap-3">
              <button
                onClick={() => delUser(e.id)}
                className="w-20 bg-red-500 p-1 rounded-2xl text-white"
              >
                Delete
              </button>

              <button className="w-20 bg-blue-500 p-1 rounded-2xl text-white">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section2;
