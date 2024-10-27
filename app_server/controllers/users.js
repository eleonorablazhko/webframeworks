/* GET 'Login' page */
const logIn = function (req, res) {
  res.render("login", { title: "Login" });
};
/* GET 'SignUp' page */
const signUp = function (req, res) {
  res.render("signup", { title: "SignUp" });
};

module.exports = {
  logIn,
  signUp,
};
