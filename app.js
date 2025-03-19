const express = require("express");
const cors = require("cors");
const crosswordRoutes = require("./routes/crossword");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static("public"));
app.use("/crossword", crosswordRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
