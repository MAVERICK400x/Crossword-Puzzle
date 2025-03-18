const express = require("express");
const router = express.Router();
const levels = require("../models/crossword");

// API to get crossword data by level
router.get("/:level", (req, res) => {
    const level = req.params.level;
    if (levels[level]) {
        res.json(levels[level]);
    } else {
        res.status(404).json({ error: "Invalid level" });
    }
});

module.exports = router;