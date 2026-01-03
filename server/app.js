import Express from "express";

const app = Express();
const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log(`Server running on PORT: ${PORT}`);
});
