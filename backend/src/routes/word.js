const express = require("express");
const router = express.Router();

const { getWord, addWord } = require("../controller/word");

router.route("/word").get(getWord).post(addWord);

module.exports = router;
