const Nxb = require("../../models/publishingCompany");
const Book = require("../../models/book.model")
const User = require("../../models/user")
const Ticket = require("../../models/ticketBorrow")
const Category = require("../../models/category")
exports.initialData = async (req, res) => {
    const nxb = await Nxb.find({}).exec();
    const book = await Book.find({})
        .select("_id name price nxb stock  borrowed descreption pictureBook")
        .populate({ path: "nxb", select: "name" })
        .populate({ path: "category", select: "name" }).exec();;

    const users = await User.find({}).exec();
    const categories = await Category.find({}).exec();
    const tickets = await Ticket.find({}).populate({ path: "idUser", select: "lastName firstName" }).populate({ path: "idBook", select: "name" }).exec();
    res.status(200).json({
        nxb,
        book,
        users,
        tickets,
        categories
    });
};