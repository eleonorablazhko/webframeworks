const recipes = [
  {
    id: 1,
    name: "Irish Stew",
    description:
      "A traditional Irish stew made with lamb, potatoes, carrots, and onions, slow-cooked to perfection.",
    ingredients: [
      "lamb",
      "potatoes",
      "carrots",
      "onions",
      "salt",
      "pepper",
      "thyme",
    ],
    cookingTime: "2 hours",
    servings: 4,
    instructions: [
      "Cut the lamb into chunks and season with salt and pepper.",
      "Peel and chop the potatoes, carrots, and onions into bite-sized pieces.",
      "In a large pot, brown the lamb on all sides over medium heat.",
      "Add the onions and cook until softened.",
      "Add the carrots, potatoes, and thyme. Pour in enough water or broth to cover the ingredients.",
      "Bring to a boil, then reduce the heat and let it simmer for about 2 hours until the meat is tender.",
      "Adjust seasoning if needed and serve hot.",
    ],
  },
  {
    id: 2,
    name: "Colcannon",
    description:
      "A comforting dish of mashed potatoes mixed with cabbage and butter, perfect for a cozy meal.",
    ingredients: ["potatoes", "cabbage", "butter", "milk", "salt", "pepper"],
    cookingTime: "45 minutes",
    servings: 4,
    instructions: [
      "Peel and cut the potatoes into chunks. Boil in salted water until tender, about 20 minutes.",
      "While the potatoes are cooking, finely chop the cabbage.",
      "In a separate pan, melt some butter and sauté the cabbage until soft.",
      "Drain the potatoes and mash them with butter, milk, salt, and pepper.",
      "Stir the sautéed cabbage into the mashed potatoes. Adjust seasoning and serve warm.",
    ],
  },
  {
    id: 3,
    name: "Soda Bread",
    description:
      "Classic Irish soda bread with a crunchy crust and soft inside, great with butter and jam.",
    ingredients: ["flour", "baking soda", "salt", "buttermilk"],
    cookingTime: "40 minutes",
    servings: 8,
    instructions: [
      "Preheat the oven to 425°F (220°C).",
      "In a large bowl, mix together the flour, baking soda, and salt.",
      "Make a well in the center and pour in the buttermilk. Mix until a dough forms.",
      "Turn the dough out onto a floured surface and knead lightly. Shape into a round loaf.",
      "Place the loaf on a baking sheet, and cut a deep cross on top.",
      "Bake for about 30-40 minutes, or until the bread is golden and sounds hollow when tapped on the bottom.",
      "Let it cool before slicing and serve with butter or jam.",
    ],
  },
  {
    id: 4,
    name: "Boxty",
    description:
      "Traditional Irish potato pancakes, crispy on the outside and soft on the inside.",
    ingredients: [
      "potatoes",
      "flour",
      "baking powder",
      "salt",
      "butter",
      "milk",
    ],
    cookingTime: "30 minutes",
    servings: 4,
    instructions: [
      "Peel and grate half of the potatoes, then squeeze out excess moisture.",
      "Boil the other half of the potatoes until tender and mash them.",
      "Mix the grated and mashed potatoes together in a bowl.",
      "Add the flour, baking powder, salt, and enough milk to form a batter.",
      "Heat a pan over medium heat and melt some butter.",
      "Drop spoonfuls of the batter onto the pan and flatten to form small pancakes.",
      "Cook until golden brown on both sides. Repeat with the remaining batter and serve warm.",
    ],
  },
  {
    id: 5,
    name: "Irish Apple Cake",
    description:
      "A moist and tender apple cake with a hint of cinnamon, often served with a dusting of sugar.",
    ingredients: [
      "apples",
      "flour",
      "sugar",
      "butter",
      "eggs",
      "cinnamon",
      "baking powder",
      "salt",
    ],
    cookingTime: "1 hour",
    servings: 6,
    instructions: [
      "Preheat the oven to 350°F (180°C). Grease and line a cake tin.",
      "Peel, core, and slice the apples.",
      "In a bowl, mix the flour, baking powder, salt, and cinnamon.",
      "In another bowl, cream together the butter and sugar until fluffy.",
      "Beat in the eggs one at a time.",
      "Gradually fold in the flour mixture, then gently mix in the apple slices.",
      "Pour the batter into the prepared tin and smooth the top.",
      "Bake for about 50-60 minutes, or until a skewer inserted into the center comes out clean.",
      "Let it cool before removing from the tin. Dust with sugar and serve.",
    ],
  },
];

const getRecipes = (req, res) => {
  res.render("home-recipes", {
    title: "Savorly - Find Your Recipe!",
    recipes: recipes,
  });
};

module.exports = {
  getRecipes,
};
