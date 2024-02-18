const express = require("express");
const router = express.Router();

const { getWord } = require("../controller/word");

router.route("/word").post(getWord);
// router.route("/test").get(test);

module.exports = router;
