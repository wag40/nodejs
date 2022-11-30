
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'This roste will products in database.'
    })
}