const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: [100, "Name cannot be more than 100 characters"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: [1000, "Description cannot be more than 1000 characters"],
    },
    ingredients: {
      type: [String],
      required: true,
      validate: {
        validator: function (v) {
          return v && v.length > 0;
        },
        message: "At least one ingredient is required",
      },
    },
    cookingTime: {
      type: String,
      required: true,
      trim: true,
    },
    servings: {
      type: Number,
      required: true,
      min: [1, "Servings must be at least 1"],
      max: [50, "Servings cannot exceed 50"],
    },
    instructions: {
      type: [String],
      required: true,
      validate: {
        validator: function (v) {
          return v && v.length > 0;
        },
        message: "At least one instruction step required",
      },
    },
  },
  {
    timestamps: true,
  }
);

recipeSchema.index({ name: 1 });
recipeSchema.index({ servings: 1 });

mongoose.model("Recipe", recipeSchema, "recipes");
