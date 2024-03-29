const fs = require("fs");
const CategoryModel = require("../model/word");
const mongoose = require("mongoose");
const path = require("path");

const wordsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "words.json"), "utf-8")
);

// import data to MongoDB
const importData = async () => {
    try {
        const data = await CategoryModel.find({});
        if (data.length > 0) {
            await CategoryModel.deleteMany({});
        }
        for (const key in wordsData) {
            if (wordsData.hasOwnProperty(key)) {
                const itemData = wordsData[key];

                await CategoryModel.create(itemData);
            }
        }
        console.log("data successfully imported");
        // to exit the process
    } catch (error) {
        console.log("error", error);
    }
};

module.exports = { importData };
