require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const wordRoute = require("./routes/word");
const notFound = require("./middleware/not-found");

// handel req.body
app.use(express.json());

// Routes
app.use("/api/v1", wordRoute);

app.use(notFound);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
