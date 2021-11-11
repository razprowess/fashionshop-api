const { Sequelize } = require("sequelize");
const config = require("./config.json");

const database = new Sequelize(
  config.databasesetting.database,
  config.databasesetting.username,
  config.databasesetting.password,
  {
    host: config.databasesetting.host,
    dialect: "mariadb",
    dialectOptions: {
      useUTC: false, //for reading from database
      timezone: "Etc/GMT0", //for writing to database
    },
    timezone: "Etc/GMT0", //for writing to database
  }
);

module.exports = database;
