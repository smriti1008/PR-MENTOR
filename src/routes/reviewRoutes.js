const express = require('express');

const{createReview} = require("../controllers/reviewcontroller");

const router = express.Router();
router.post("/", createReview);
module.exports = router;