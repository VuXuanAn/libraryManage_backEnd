const mongoose = require("mongoose");

const NXBSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 20,
        },
        address: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 20,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        slug: {
            type: String,
            trim: true,
            unique: true,
            lowercase: true,
        }

    },
    { timestamps: true }
);

module.exports = mongoose.model("NXB", NXBSchema);