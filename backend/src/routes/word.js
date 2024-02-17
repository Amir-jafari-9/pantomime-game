const express = require("express");
const router = express.Router();

const { getWord } = require("../controller/word");

router.route("/word").get(getWord);

module.exports = router;
