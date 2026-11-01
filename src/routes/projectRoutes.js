const express = require('express');

const {
    getAbout
} = require("../controllers/projectcontroller");

const router = express.Router();
router.get("/about", getAbout);
module.expports = router;