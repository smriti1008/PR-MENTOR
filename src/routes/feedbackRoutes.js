const express = require ('express');

const router = express.Router();

const {createFeedback} = require("../controllers/feedbackController")

const validateFeedback = require("../middlewares/validateFeedback")

router.post ("/",validateFeedback, createFeedback);

module.exports = router;