const Sequelize = require("sequelize");

const sequelize = new Sequelize("naimat-shop", "root", "#coding.2023", {
	dialect: "mysql",
	host: "localhost",
});

module.exports = sequelize;
