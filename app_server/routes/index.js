const express = require("express");
const router = express.Router();
const ctrlRecipes = require("../controllers/recipes");

router.get("/", ctrlRecipes.displayRecipes);
router.get("/login", ctrlRecipes.login);
router.get("/signup", ctrlRecipes.signup);

module.exports = router;
