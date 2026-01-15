import styles from "./header.module.css";
import { Link } from "react-router";

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
                        <h4>
                            <Link to="/developers">Developers</Link>
                        </h4>
                    </li>
                    <li>
                        <h4>
                            <Link to="/genres">Genres</Link>
                        </h4>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
