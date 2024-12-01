const mongoose = require("mongoose");
const dbURI =
  "mongodb+srv://eb_user:xQ7bnxitfu4@savorly.m68dh.mongodb.net/savorly?retryWrites=true&w=majority";
try {
  mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
      () => {
        console.log(" Mongoose is connected");
      },
      (err) => {
        console.log(err);
      }
    );
} catch (e) {
  console.log("could not connect");
}

require("./recipe");
