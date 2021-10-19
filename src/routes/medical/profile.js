const express = require("express");
const { requireSignin, adminMiddleware } = require("../../common-middleware");
const { createNewProfile, getAllProfile, deleteProfile } = require("../../controller/medical/profile");
const router = express.Router();

router.post("/medical/create", requireSignin, adminMiddleware, createNewProfile);
router.post("/medical/getAll", getAllProfile);
router.post("/medical/deleteById", deleteProfile);
module.exports = router;