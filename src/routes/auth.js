const express = require('express');
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { signup, signin, getAllUser } = require('../controller/user');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const router = express.Router();


router.post('/user/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/signin', validateSigninRequest, isRequestValidated, signin);
router.get('/user/getAllUser', requireSignin, adminMiddleware, getAllUser);

module.exports = router;