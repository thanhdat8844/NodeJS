const express = require("express");
const app = express();
app.use("", (req, res, next) => {
  console.log("this always runs!");
  next(); //allow the request to continune to the next middleware in line
});

app.use("/add-product", (req, res, next) => {
  console.log("In the another middleware");
  res.send("<h1>The 'Add Product'</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In the another middleware");
  res.send("<h1>Hello from Express</h1>");
});
app.listen(3000);
