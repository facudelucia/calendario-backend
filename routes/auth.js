const express = require("express");
const router = express.Router();
const {createUser, loginUser, revalidateToken} = require("../controllers/auth")
const {check} = require("express-validator");
const {fieldValidate} = require("../middlewares/field-validate");
const {validateJWT} = require("../middlewares/validate-token")


router.post(
    "/new", 
    [
        check("name", "name is required").not().isEmpty(),
        check("email", "email is required").isEmail(),
        check("password", "password must be at least 6 characters").isLength({min: 6}),
        fieldValidate
    ],
    createUser)
router.post(
    "/", 
    [
        check("email", "email is required").isEmail(),
        check("password", "password must be at least 6 characters").isLength({min: 6}),
        fieldValidate
    ],
loginUser)
router.get("/renew", validateJWT,revalidateToken)


module.exports = router;