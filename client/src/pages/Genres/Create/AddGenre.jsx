import api from "../../../api/methods.js";
import { useNavigate } from "react-router";

import styles from "./addgenre.module.css";

export default function AddGenre() {
    const navigate = useNavigate();

    async function submitForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData);

        api.post("/genres/create", formValues);
        navigate("/genres");
    }
    return (
        <section className="section-container">
            <h3>Add New Genre</h3>
            <form
                className={styles.form}
                action="/genres/create"
                method="post"
                onSubmit={(e) => submitForm(e)}
            >
                <label htmlFor="developerName">Genre Name</label>
                <input
                    type="text"
                    id="genreName"
                    name="genreName"
                    placeholder="E.g. Action RPG"
                    required
                />

                <label htmlFor="description">Description (optional)</label>
                <textarea
                    name="description"
                    id="description"
                    placeholder="E.g. This genre is about the epicness of an adventure!"
                    spellCheck="true"
                    rows={100}
                    cols={100}
                    maxLength={300}
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}
