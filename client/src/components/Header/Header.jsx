import styles from "./header.module.css";
import { Link } from "react-router";
import { useRef } from "react";

export default function Header({ title }) {
    function onClick() {
        const currentUrl = new URL(window.location.href);
        console.log(currentUrl.pathname);
    }

    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <ul className={styles.headerNavigation} onClick={onClick}>
                    <li>
                        <h4>
                            {" "}
                            <Link to="/">Home</Link>
                        </h4>
                    </li>
                    <li>
                        <h4>
                            <Link to="/games">Games</Link>
                        </h4>
                    </li>
                    <li>
                        <h4>Developers</h4>
                    </li>
                    <li>
                        <h4>Genres</h4>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
