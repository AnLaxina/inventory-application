import { Link } from "react-router";
import { useEffect, useState } from "react";

import api from "../../api/methods.js";
import Table from "../../components/Table/Table.jsx";

export default function Developers() {
    const [developers, setDevelopers] = useState([]);

    useEffect(() => {
        const loadDevelopers = async () => {
            const developers = await api.get("/developers");
            setDevelopers(Object.values(developers));
        };

        loadDevelopers();
    }, []);

    return (
        <section className="section-container">
            <h3>Developers</h3>
            <div className="page-container">
                {developers.length === 0 ? (
                    <p>No developers found!</p>
                ) : (
                    <Table data={developers} />
                )}
            </div>
            <Link to="/developers/create" className="button-link">
                Add Developer
            </Link>
        </section>
    );
}
