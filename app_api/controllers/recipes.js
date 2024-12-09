const mongoose = require("mongoose");
const Recipe = mongoose.model("Recipe");

// Get all recipes
const recipesListByDistance = async function (req, res) {
  try {
    const filter = {};
    if (req.query.name) {
      filter.name = new RegExp(req.query.name, "i");
    }
    if (req.query.servings) {
      filter.servings = parseInt(req.query.servings);
    }

    const recipes = await Recipe.find(filter)
      .sort({ name: 1 })
      .limit(req.query.limit ? parseInt(req.query.limit) : 10);

    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Error fetching recipes",
    });
  }
};
const recipeById = async function (req, res) {
  try {
    const recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({
        status: "error",
        message: "Recipe not found",
      });
    }

    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Error fetching recipe",
    });
  }
};

module.exports = {
  recipesListByDistance,
  recipeById,
};
