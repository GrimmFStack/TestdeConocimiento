const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Log", {
    user: DataTypes.STRING,
    accion: DataTypes.STRING,
    entidad: DataTypes.STRING,
    detalle: DataTypes.TEXT,
  });
};
