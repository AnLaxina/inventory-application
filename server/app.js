import express from "express";
import cors from "cors";

const app = express();
// Setup for allowing React to communicate and making req.body work
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log(`Server running on PORT: ${PORT}`);
});
