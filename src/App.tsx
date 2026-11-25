import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import RhfPage from "./components/RhfPage";
import Page2 from "./components/Page2";
import Lout from "./components/Lout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Lout />,
    children: [
      {
        index: true,
        element: <RhfPage />,
      },
      {
        path: "Page2",
        element: <Page2 />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
