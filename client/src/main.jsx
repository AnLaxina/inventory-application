// TODO: Fix the error with react-router.... ugh....

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";

import { RouterProvider } from "react-router";
import router from "./api/router.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
