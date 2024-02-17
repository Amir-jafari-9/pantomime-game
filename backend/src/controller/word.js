const CategoryModel = require("../model/word");

const getWord = async (req, res) => {
    const { category, difficulty } = req.body;
    const categories = await CategoryModel.find({ categoryName: category });

    const filterByDifficulty = categories
        .filter((category) => category.words[0].difficulty === difficulty)
        .map((word) => word.words[0].word);

    res.status(200).json({
        status: 200,
        success: true,
        message: "get word successfully",
        data: {
            category: category,
            difficulty: difficulty,
            word: filterByDifficulty
        }
    });
};
const addWord = async (req, res) => {
    const word = await CategoryModel.create(req.body);
    res.status(200).json({
        status: 201,
        success: true,
        message: "add word successfully",
        data: {
            category: word.categoryName,
            difficulty: word.words[0].difficulty,
            word: word.words[0].word
        }
    });
};

module.exports = { getWord, addWord };
