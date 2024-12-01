const axios = require("axios");

const apiOptions = {
  server: "http://localhost:3000",
};
if (process.env.NODE_ENV === "production") {
  apiOptions.server = "https://savorly-eb.onrender.com";
}

const _renderHomepage = function (req, res, responseData) {
  res.render("home-recipes", {
    title: "Savorly - Find Your Recipe!",
    recipes: responseData || [],
  });
};

const displayRecipes = async (req, res) => {
  try {
    const path = "/api/recipes";
    const response = await axios.get(apiOptions.server + path);
    _renderHomepage(req, res, response.data);
  } catch (error) {
    console.error("Error:", error);
    _renderHomepage(req, res, []);
  }
};

const login = (req, res) => {
  res.render("login", { title: "Login to Savorly" });
};

const signup = (req, res) => {
  res.render("signup", { title: "Sign Up for Savorly" });
};

module.exports = {
  displayRecipes,
  login,
  signup,
};
