const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        soSBH: { type: String },
        ngayDangKi: { type: Date },
        ngayHethan: { type: Date }
    },
    { timestamps: true }
);
module.exports = mongoose.model("Assuarance", userSchema);