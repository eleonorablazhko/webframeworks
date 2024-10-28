const mongoose = require("mongoose");
const dbURI = "";
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
require("./user");
require("./recipe");
