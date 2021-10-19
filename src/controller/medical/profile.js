const Profile = require('../../models/medical/profile.medical')

exports.createNewProfile = async (req, res) => {
    const {
        soCMND,
        hoTen,
        ngaySinh,
        ngayVaoVien,
        ngayRaVien,
        baoHiem,
        tenBenh,
        vienPhi
    } = req.body

    const assuarance = {
        soCMND,
        hoTen,
        ngaySinh,
        ngayVaoVien,
        ngayRaVien,
        baoHiem,
        tenBenh,
        vienPhi
    }
    const _assuarance = new Profile(assuarance)

    _assuarance.save((error, nxb) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        if (nxb) {
            return res.status(201).json({ message: 'add success' });
        }
    });
}


exports.getAllProfile = async (req, res) => {
    const profiles = await Profile.find({}).exec();
    res.status(200).json({
        profiles
    })
}
exports.deleteProfile = async (req, res) => {
    const { _id } = req.body;
    if (_id) {
        Profile.deleteOne({ _id: _id }).exec((error, result) => {
            if (error) return res.status(400).json({ error });
            if (result) {
                res.status(201).json({ message: 'delete successful' });
            }
        });
    } else {
        res.status(400).json({ error: "Params required" });
    }
}