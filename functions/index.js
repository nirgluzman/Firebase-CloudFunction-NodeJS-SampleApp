const functions = require("firebase-functions");

const express = require("express");
const app = express();

const userRoute = require("./routes/user");

app.use("/user", userRoute);

// Expose Express API as a single Cloud Function.
exports.app = functions.https.onRequest(app);
