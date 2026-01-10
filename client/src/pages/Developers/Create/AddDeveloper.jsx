export default function AddDeveloper() {
    function submitForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData);

        fetch("http://localhost:3000/developers/create", {
            method: "POST",
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error))
            .finally(() => console.log("Done!"));
    }
    return (
        <section className="section-container">
            <h3>Add New Developer</h3>
            <form
                action="/developers/create"
                method="post"
                onSubmit={(e) => submitForm(e)}
            >
                <label htmlFor="developerName">Developer Name</label>
                <input
                    type="text"
                    id="developerName"
                    name="developerName"
                    placeholder="E.g. Nintendo"
                    required
                />

                <label htmlFor="headquarters">Headquarters (optional)</label>
                <input
                    type="text"
                    id="headquarters"
                    name="headquarters"
                    placeholder="E.g. Seattle, WA"
                />

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}
