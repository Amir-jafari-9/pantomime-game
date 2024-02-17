require("dotenv").config();
const express = require("express");
const app = express();
const mongoCon = require("./connection/mongoCon");
const port = process.env.PORT || 3000;

const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error_handler");

const wordRoute = require("./routes/word");

// handel req.body
app.use(express.json());

// Routes
app.use("/api/v1", wordRoute);

// middleware
app.use(errorHandlerMiddleware);
app.use(notFound);

const start = async () => {
    try {
        await mongoCon(
            process.env.MONGO_URI,
            console.log("database connected ...")
        );
        app.listen(port, console.log(`server is listening to port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};
start();
