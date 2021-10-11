const Blog = require('../models/blog.model')

exports.addNewBlog = (req, res) => {
    const { title, content } = req.body;
    const newBlog = {
        title,
        content
    }
    if (req.file) {
        newBlog.pictureBlog = req.file.filename;
    }
    const _newBlog = new Blog(newBlog);
    _newBlog.save((error, newBlog) => {
        if (error) {
            return res.status(400).json({ error });
        }
        if (newBlog) {
            return res.status(201).json({ newBlog });
        }
    });
}
exports.getAllBlog = async (req, res) => {
    const blogs = await Blog.find({}).exec();;
    res.status(200).json({ blogs });
}
