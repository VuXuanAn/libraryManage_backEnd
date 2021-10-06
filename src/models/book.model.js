const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number
    },
    nxb: {
        type: mongoose.Schema.Types.ObjectId, ref: 'NXB',
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    borrowed: {
        type: Number,
    },
    pictureBook: {
        type: String
    },
    descreption: {
        type: String
    }
},
    { timestamps: true }
)
module.exports = mongoose.model("Book", bookSchema);