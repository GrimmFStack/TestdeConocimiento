const { Sequelize } = require("sequelize");
const UserModel = require("./user.model");
const ProductoModel = require("./producto.model");
const MarcaModel = require("./marca.model");
const LogModel = require("./log.model");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "postgres"
});

const User = UserModel(sequelize);
const Producto = ProductoModel(sequelize);
const Marca = MarcaModel(sequelize);
const Log = LogModel(sequelize);

Marca.hasMany(Producto);
Producto.belongsTo(Marca);

module.exports = { sequelize, User, Producto, Marca, Log };
