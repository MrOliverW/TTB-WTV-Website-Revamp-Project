const express = require("express");
const router = express.Router();
const path = require("path");

const publicPath = path.join(__dirname, "../public");

router.get("/", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

router.get("/about", (req, res) => {
    res.sendFile(path.join(publicPath, "about.html"));
});

module.exports = router;