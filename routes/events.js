const express = require("express");
const { getEvents, createEvent, refreshEvent, deleteEvent } = require("../controllers/events");
const { check } = require("express-validator")
const { fieldValidate } = require("../middlewares/field-validate")
const router = express.Router();
const { validateJWT } = require("../middlewares/validate-token");
const { isDate } = require("../helpers/isDate");

router.use(validateJWT)
router.get("/", getEvents);
router.post(
    "/",
    [
        check("title", "title is required").not().isEmpty(),
        check("start", "start date is required").custom(isDate),
        check("end", "end date is required").custom(isDate),
        fieldValidate
    ],
    createEvent);
router.put(
    "/:id", 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        fieldValidate
    ], 
    refreshEvent);
router.delete("/:id", deleteEvent);


module.exports = router;