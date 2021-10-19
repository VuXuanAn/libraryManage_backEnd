const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { addNewBook, getAllBook, deleteBook, getProductDetailsById } = require("../controller/book");

const shortid = require("shortid");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), "upload"));
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + "-" + file.originalname);
    },
});

const upload = multer({ storage });


const router = express.Router();

router.post("/book/create", requireSignin, adminMiddleware, upload.single("pictureBook"), addNewBook);
router.post("/book/getAllBook", getAllBook);

router.get("/book/:bookId", getProductDetailsById);

router.post("/book/deleteBook", requireSignin, adminMiddleware, deleteBook);


module.exports = router;