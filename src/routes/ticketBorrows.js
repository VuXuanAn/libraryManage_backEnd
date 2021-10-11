const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { addTickets, getAllTicket, returnBook } = require("../controller/ticketBorrowed");
const router = express.Router();

router.post("/ticketBorrowd/create", requireSignin, adminMiddleware, addTickets);
router.get("/ticketBorrowd/getAllTicket", requireSignin, adminMiddleware, getAllTicket);
router.post("/ticketBorrowd/return", requireSignin, adminMiddleware, returnBook);
module.exports = router;