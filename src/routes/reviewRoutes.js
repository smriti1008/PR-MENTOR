const express = require('express');

const controller = require('../controllers/reviewcontroller')

const validateReviewId = require('../middlewares/validateReviewId')

const validateReviewUpdate = require('../middlewares/validateReviewUpdate')

const validateReview = require("../middlewares/validateMiddleware");

const router = express.Router();
router.post("/", validateReview, controller.createReview);
router.get("/", controller.getAllReviews);
router.get("/:id",validateReviewId, controller.getReviewById)
router.patch("/:id", validateReviewId, validateReviewUpdate, controller.updateReview);
router.delete("/:id", validateReviewId, controller.deleteReview)
module.exports = router;