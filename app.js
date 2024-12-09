require("./app_api/models/db"); // Database connection
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const apiRoutes = require("./app_api/routes/index");
const serverRoutes = require("./app_server/routes/index");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var flash = require("connect-flash");
const session = require("express-session");
var app = express();

// View engine setup for Pug
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "pug");

// Middleware setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Set up session
app.use(
  session({
    secret: "keyboard cat", // You should replace this with a strong secret key
    resave: false,
    saveUninitialized: false,
  })
);

// Passport.js middleware setup
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// CORS handling for API requests
app.use("/api", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes
app.use("/", serverRoutes); // Server-side routes
app.use("/api", apiRoutes); // API routes

// Passport.js setup for authentication
var Account = require("./app_api/models/account"); // Assuming this is the correct path to your Account model
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// Error handling for 404
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler (development environment)
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

// Error handler (production environment)
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
