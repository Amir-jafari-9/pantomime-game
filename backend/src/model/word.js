const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ["آسان", "متوسط", "سخت"]
    }
});
const CategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true },
    words: [WordSchema]
});

const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel;
