const CustomAPIError = require("../error/custom-error");
const CategoryModel = require("../model/word");

const test = (req, res) => {
    res.status(200).json({
        status: 200,
        success: true,
        message: "get word successfully",
        data: {
            category: "test",
            difficulty: "test-difficulty",
            word: "test word"
        }
    });
};

const getWord = async (req, res) => {
    const { category, difficulty } = req.body;
    if (!category || !difficulty) {
        throw new CustomAPIError("category or difficulty is not valid", 404);
    }

    const [categoryData] = await CategoryModel.find({ categoryName: category });

    if (!categoryData)
        throw new CustomAPIError(`category '${category}' not found :( `, 404);

    const filterByDifficulty = categoryData.words
        .filter((word) => word.difficulty == difficulty)
        .map((wordObj) => wordObj.word);

    const randomNumber = Math.floor(Math.random() * filterByDifficulty.length);
    const randomWord = filterByDifficulty[randomNumber];

    res.status(200).json({
        status: 200,
        success: true,
        message: "get word successfully",
        data: {
            category: category,
            difficulty: difficulty,
            word: randomWord
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

module.exports = { getWord, addWord, test };
