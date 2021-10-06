const Nxb = require("../../models/publishingCompany");
const Book = require("../../models/book.model")
const User = require("../../models/user")
exports.initialData = async (req, res) => {
    const nxb = await Nxb.find({}).exec();
    const book = await Book.find({})
        .select("_id name price nxb stock  borrowed descreption pictureBook")
        .populate({ path: "nxb", select: "name" }).exec();;

    const users = await User.find({}).exec();
    res.status(200).json({
        nxb,
        book,
        users
    });
};