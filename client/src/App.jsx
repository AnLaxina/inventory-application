import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router";

function App() {
    return (
        <>
            <Header title="Game Time" />
            <Outlet />
            <Footer text="2026 AnLaxina" />
        </>
    );
}

export default App;
