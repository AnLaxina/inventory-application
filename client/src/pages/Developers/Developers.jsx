import { Link } from "react-router";

export default function Developers() {
    return (
        <section className="section-container">
            <h3>Developers</h3>
            <div className="page-container">
                <p>No developers found!</p>
            </div>
            <Link to="/developers/create" className="button-link">
                Add Developer
            </Link>
        </section>
    );
}
