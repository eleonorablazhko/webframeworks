const express = require("express");
const router = express.Router();
const ctrlRecipes = require("../controllers/recipes");

// Get all recipes
router.route("/recipes").get(ctrlRecipes.recipesListByDistance);

module.exports = router;
