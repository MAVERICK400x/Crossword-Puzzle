const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const crosswordRoutes = require("./routes/crossword");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests
app.use(express.static("public"));
app.use("/crossword", crosswordRoutes);

const DATA_FILE = path.join(__dirname, "data", "crossword.json");

// ✅ **GET all crossword levels**
app.get("/crossword/all", (req, res) => {
    try {
        const data = fs.readFileSync(DATA_FILE, "utf8");
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ message: "Error reading crossword data." });
    }
});

// ✅ **POST new crossword data**
app.post("/crossword/add", (req, res) => {
    try {
        const newLevel = req.body;

        if (!newLevel.level || !newLevel.words || !newLevel.clues) {
            return res.status(400).json({ message: "Invalid crossword data." });
        }

        const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
        data[newLevel.level] = {
            words: newLevel.words,
            clues: newLevel.clues
        };

        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 4));

        res.status(201).json({ message: "New crossword level added!", data });
    } catch (error) {
        res.status(500).json({ message: "Error saving crossword data." });
    }
});

// ✅ **Start server**
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});