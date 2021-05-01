const express = require("express");
const { check } = require("express-validator");
const { signup, signin } = require("../../controller/admin/auth");



const User = require('../../models/user');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require("../../validators/auth");

const router = express.Router();
router.get('/signin',(req,res) => {

})
router.post('/admin/signup',validateSignupRequest,isRequestValidated,signup);
router.post('/admin/signin',validateSigninRequest,isRequestValidated,signin);

// router.post('/profile', requireSignin, (req,res) => {
//     res.status(200).json({ user: 'profile' })
// })
module.exports = router;