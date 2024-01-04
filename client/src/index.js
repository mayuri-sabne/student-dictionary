import React from "react";
import ReactDOM from "react-dom/client";

import {
  RouterProvider
} from "react-router-dom";
import customRouter from "./project-router.js";


const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(<RouterProvider router={customRouter}></RouterProvider>);