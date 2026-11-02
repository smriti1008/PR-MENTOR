const express = require('express');

const{createReview, getReviewById} = require("../controllers/reviewcontroller");

const validateReview = require("../middlewares/validateMiddleware");

const router = express.Router();
router.post("/", validateReview, createReview);
router.get("/:id", getReviewById)
module.exports = router;