var express = require("express");
var router = express.Router();
const ctrlAuthorisation = require("../controllers/users");
router.get("/users/login", ctrlAuthorisation.logIn);
router.get("/users/signup", ctrlAuthorisation.signUp);
module.exports = router;
