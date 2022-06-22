const express = require("express");
// const cookieParser = require("cookie-parser")
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const HttpError = require("./utils/http-error");
const userRoutes = require("./routes/userRoute");
const requestRoutes = require("./routes/requestRoute");
const bidRoutes = require("./routes/biddRoute");
const app = express();

// for the body
app.use(bodyParser.json());

// endpoints
app.use("/api/users", userRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/bid", bidRoutes);

// handeling unknown routes
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

// error handeling
app.use((error, req, res, next) => {
  // if header alredy setn then continue
  if (res.headerSent) {
    return next(error);
  }
  // else process the errors
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

// start the server only if the db in connected
app.listen(5000);
// mongoose
//   .connect(
//     `mongodb+srv://academind:ORlnOPLKvIH9M9hP@cluster0-ntrwp.mongodb.net/mern?retryWrites=true&w=majority`
//   )
//   .then(() => {
//     app.listen(5000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
