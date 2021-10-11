const mongoose = require('mongoose')

const ticketBorrowed = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        require: true
    },
    idBook: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Book',
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    isReturn: {
        type: Boolean,
        default: false,
        require: true
    },
    dateBorrow: {
        type: Date,
        require: true
    },
    dateMustReturn: {
        type: Date,
        require: true
    },
    dateReturn: {
        type: Date
    }
},
    { timestamps: true }
)
module.exports = mongoose.model("ticketBorrow", ticketBorrowed);