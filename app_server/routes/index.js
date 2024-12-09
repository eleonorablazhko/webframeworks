const express = require("express");
const passport = require("passport");
const Account = require("../../app_api/models/account");
const ctrlRecipes = require("../controllers/recipes");
const router = express.Router();

// Recipe routes
router.get("/", ctrlRecipes.displayRecipes);

// Passport authentication routes

// Render login page
router.get("/login", (req, res) => {
  res.render("login", { user: req.user, error: req.flash("error") });
});

// Handle login form submission
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res, next) => {
    req.session.save((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  }
);

// Render register page
router.get("/register", (req, res) => {
  res.render("register", {});
});

// Handle registration form submission
router.post("/register", (req, res, next) => {
  Account.register(
    new Account({ username: req.body.username }),
    req.body.password,
    (err, account) => {
      if (err) {
        return res.render("register", { error: err.message });
      }

      passport.authenticate("local")(req, res, () => {
        req.session.save((err) => {
          if (err) {
            return next(err);
          }
          res.redirect("/");
        });
      });
    }
  );
});

// Handle logout
router.get("/logout", (req, res, next) => {
  req.logout();
  req.session.save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

// Ping route for testing
router.get("/ping", (req, res) => {
  res.status(200).send("pong!");
});

module.exports = router;
