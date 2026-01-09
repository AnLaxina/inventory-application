import { createBrowserRouter } from "react-router";
import App from "../App.jsx";

import Games from "../pages/Games/Games.jsx";
import Developers from "../pages/Developers/Developers.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { path: "games", Component: Games },
            { path: "developers", Component: Developers },
        ],
    },
]);

export default router;
