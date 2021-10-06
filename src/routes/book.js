const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const shortid = require("shortid");

const path = require("path");
const multer = require("multer");
const { addNewBook, getAllBook, deleteBook } = require("../controller/book");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + "-" + file.originalname);
    },
});

const upload = multer({ storage });


const router = express.Router();

router.post("/book/create", requireSignin, adminMiddleware, upload.single("pictureBook"), addNewBook);
router.post("/book/getAllBook", requireSignin, adminMiddleware, getAllBook);
router.post("/book/deleteBook", requireSignin, adminMiddleware, deleteBook);


module.exports = router;