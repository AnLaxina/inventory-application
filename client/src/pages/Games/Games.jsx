import styles from "./games.module.css";
import { Link } from "react-router";

// TODO: try adding a table of some kind rather than a grid of games. Just to avoid having to use an API if it's not
// needed right now. So I guess just display the relevant info!

export default function Games() {
    return (
        <section className="section-container">
            <h3>Available Games</h3>
            <div className="page-container">
                <p>No games found!</p>
            </div>
            <Link to={"/games/create"} class="button-link">
                Add Game
            </Link>
        </section>
    );
}
