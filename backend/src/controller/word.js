const getWord = (req, res) => {
    res.status(200).json({
        status: 200,
        success: true,
        message: "get word successfully",
        data: {
            word: "cat"
        }
    });
};

module.exports = { getWord };