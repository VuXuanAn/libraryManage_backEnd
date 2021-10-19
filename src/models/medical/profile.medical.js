const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        soCMND: { type: Number },
        hoTen: { type: String },
        ngaySinh: { type: Date },
        ngayVaoVien: { type: Date },
        ngayRaVien: { type: Date },
        baoHiem: { type: String },
        tenBenh: { type: String },
        vienPhi: { type: Number }
    },
    { timestamps: true }
);
module.exports = mongoose.model("Profile", userSchema);