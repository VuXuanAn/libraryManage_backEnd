const Category = require('./../models/category')



exports.CreateCategory = (req, res) => {
    const { name } = req.body;
    const category = new Category({
        name
    })
    category.save((error, cate) => {
        if (error) {
            res.status(400).json({ error: 'something wrong' })
        }
        if (cate) {
            res.status(201).json({ message: 'create success' })
        }
    })
}

exports.getAllCategory = async (req, res) => {
    const categories = await Category.find({}).exec();
    res.status(200).json({
        categories
    })
}