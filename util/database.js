const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Anhk0biet", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
