import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Games from "../pages/Games/Games.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [{ path: "games", Component: Games }],
    },
]);

export default router;
