const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");

require("dotenv").config();

const app = express();
const port = 3000;

//Paring middleware
//Parse app/form urlendcoded
app.use(bodyParser.urlencoded({ extended: false }));

//Parse app/json
app.use(bodyParser.json());

//Static files
app.use(express.static(path.join(__dirname, "public")));

//Template Engine
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

//Router
app.get("", (req, res) => {
  res.render("home");
});

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
