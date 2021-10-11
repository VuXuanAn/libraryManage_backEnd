const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");

const shortid = require("shortid");
const path = require("path");
const multer = require("multer");
const { addNewBlog, getAllBlog } = require("../controller/blog");

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

router.post("/blog/create", requireSignin, adminMiddleware, upload.single("pictureBlog"), addNewBlog);
router.get("/blog/getAllBlog", getAllBlog);
module.exports = router;