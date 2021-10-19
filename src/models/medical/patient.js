const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        soCmnd: { type: Number },
        hoten: { type: String },
        gioiTinh: { type: String },
        ngaySinh: { type: Date },
        queQuan: { type: String },

    },
    { timestamps: true }
);
module.exports = mongoose.model("Patient", userSchema);