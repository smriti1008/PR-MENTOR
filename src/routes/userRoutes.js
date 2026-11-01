const express = require ("express");

const {getUserById, searchUsers} = require("../controllers/usercontroller");

const router = express.Router();
router.get("/search", searchUsers);
router.get("/:id", getUserById);

module.exports = router;