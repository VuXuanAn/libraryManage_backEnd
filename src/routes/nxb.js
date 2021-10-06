const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { addNxb, deleteNxb, getnxbs } = require("../controller/NXB");
const router = express.Router();

router.post("/product/create", requireSignin, adminMiddleware, addNxb);
router.get("/product/getNxb", requireSignin, adminMiddleware, getnxbs);
router.post("/product/delete", requireSignin, adminMiddleware, deleteNxb);
module.exports = router;