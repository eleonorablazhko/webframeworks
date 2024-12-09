const express = require("express");
const router = express.Router();
const ctrlRecipes = require("../controllers/recipes");
const Account = require("../models/account");

// Get all recipes
router.route("/recipes").get(ctrlRecipes.recipesListByDistance);
router.get("/recipes/:id", ctrlRecipes.recipeById);

module.exports = router;
