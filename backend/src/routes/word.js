const express = require("express");
const router = express.Router();

const { getWord, addWord, test } = require("../controller/word");

router.route("/word").get(getWord).post(addWord);
router.route("/test").get(test);

module.exports = router;
