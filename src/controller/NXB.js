const Nxb = require('./../models/publishingCompany')

const slugify = require("slugify");


exports.addNxb = (req, res) => {
    Nxb.findOne({ email: req.body.email }).exec(async (error, nxb) => {
        if (nxb) {
            return res.status(400).json({
                error: "nxb already registered",
            });
        }

        const { name, address, phoneNumber, email } = req.body;
        const _nxb = new Nxb({
            name,
            address,
            phoneNumber,
            email,
            slug: slugify(name)
        });

        _nxb.save((error, nxb) => {
            if (error) {
                return res.status(400).json({
                    error
                });
            }
            if (nxb) {
                return res.status(201).json({ message: 'add success' });
            }
        });
    });
}
exports.deleteNxb = (req, res) => {
    const { _id } = req.body;
    if (_id) {
        Nxb.deleteOne({ _id: _id }).exec((error, result) => {
            if (error) return res.status(400).json({ error });
            if (result) {
                res.status(201).json({ result });
            }
        });
    } else {
        res.status(400).json({ error: "Params required" });
    }
}

exports.getnxbs = async (req, res) => {
    const nxb = await Nxb.find({}).exec();
    res.status(200).json({
        nxb
    });
};