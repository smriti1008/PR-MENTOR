const express = require('express');

const{createReview} = require("../controllers/reviewcontroller");

const validateReview = require("../middlewares/validateMiddleware");

const router = express.Router();
router.post("/", validateReview, createReview);
module.exports = router;