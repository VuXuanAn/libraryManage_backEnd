const Patient = require('../../models/medical/patient')

exports.createNewProfile = async (req, res) => {
    const {
        soCmnd,
        hoten,
        gioiTinh,
        ngaySinh,
        queQuan,
    } = req.body

    const patient = {
        soCmnd,
        hoten,
        gioiTinh,
        ngaySinh,
        queQuan,
    }
    const _patient = new Patient(patient)

    _patient.save((error, nxb) => {
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

exports.getAllPatient = async (req, res) => {
    const {
        soCmnd,
        hoten,
        gioiTinh,
        ngaySinh,
        queQuan,
    } = req.body

    const patient = {
        soCmnd,
        hoten,
        gioiTinh,
        ngaySinh,
        queQuan,
    }
    const _patient = new Patient(patient)

    _patient.save((error, nxb) => {
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
