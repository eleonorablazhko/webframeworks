const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  cookingTime: {
    type: String,
    required: true,
  },
  servings: {
    type: Number,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
});
mongoose.model("Recipe", recipeSchema, "recipes");
