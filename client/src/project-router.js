import {
  createBrowserRouter
} from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Edit from "./components/Edit";
import List from "./components/List";
import About from "./components/About";

const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <Home></Home>
      },
      {
        path: "/edit/:userid",
        element: <Edit />
      },
      {
        path: "/show",
        element: <List />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
])

export default customRouter;