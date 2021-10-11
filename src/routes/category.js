const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { CreateCategory, getAllCategory } = require("../controller/category");
const router = express.Router();

router.post("/category/create", requireSignin, adminMiddleware, CreateCategory);
router.get("/category/getAllCategory", getAllCategory);
module.exports = router;