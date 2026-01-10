import { createBrowserRouter } from "react-router";
import App from "../App.jsx";

import Games from "../pages/Games/Games.jsx";
import Developers from "../pages/Developers/Developers.jsx";
import AddDeveloper from "../pages/Developers/Create/AddDeveloper.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { path: "games", Component: Games },
            {
                path: "developers",
                Component: Developers,
            },
            { path: "developers/create", Component: AddDeveloper },
        ],
    },
]);

export default router;
