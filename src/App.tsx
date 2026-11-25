import Laoyt from "./pages/Laoyt";
import Home from "./pages/Home";
import About from "./pages/About";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Crud from "./pages/crud";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Laoyt />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "Crud", element: <Crud /> },
      { path: "*", element: "Not foud" },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;