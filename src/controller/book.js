const Book = require('../models/book.model')

exports.addNewBook = (req, res) => {
    const { name, price, nxb, stock, borrowed, descreption, category } = req.body;
    const newBook = {
        name,
        price,
        nxb,
        stock,
        borrowed,
        descreption,
        category
    }
    if (req.file) {
        newBook.pictureBook = req.file.filename;
    }
    const _newBook = new Book(newBook);
    _newBook.save((error, newbook) => {
        if (error) {
            return res.status(400).json({ error });
        }
        if (newbook) {
            return res.status(201).json({ newbook });
        }
    });
}

exports.getAllBook = async (req, res) => {
    const book = await Book.find({})
        .select("_id name price nxb stock  borrowed descreption pictureBook  category ")
        .populate({ path: "nxb", select: "name" }, { path: 'category', select: "name" }).exec();;
    res.status(200).json({ book });
}


exports.deleteBook = async (req, res) => {
    const { _id } = req.body;
    if (_id) {
        Book.deleteOne({ _id: _id }).exec((error, result) => {
            if (error) return res.status(400).json({ error });
            if (result) {
                res.status(201).json({ result });
            }
        });
    } else {
        res.status(400).json({ error: "Params required" });
    }
}