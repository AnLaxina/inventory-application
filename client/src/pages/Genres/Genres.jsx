import { Link } from "react-router";
import { useEffect, useState } from "react";

import api from "../../api/methods.js";
import Table from "../../components/Table/Table.jsx";

export default function Genres() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const loadGenres = async () => {
            const genres = await api.get("/genres");
            setGenres(Object.values(genres));
        };

        loadGenres();
    }, []);

    return (
        <section className="section-container">
            <h3>Genres</h3>
            <div className="page-container">
                {genres.length === 0 ? (
                    <p>No genres found!</p>
                ) : (
                    <Table data={genres} />
                )}
            </div>
            <Link to="/developers/create" className="button-link">
                Add Developer
            </Link>
        </section>
    );
}
