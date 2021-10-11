const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true
    },
    pictureBlog: {
        type: String
    }
},
    { timestamps: true }
)
module.exports = mongoose.model("Blog", blogSchema);