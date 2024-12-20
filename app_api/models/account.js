const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const Account = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model("Account", Account, "accounts");
