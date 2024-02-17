const notFound = (req, res) => {
    res.status(404).json({
        status: 404,
        success: false,
        message: ":( 404 page not found!",
        data: null
    });
};

module.exports = notFound;
