const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Marca", {
    nombre: DataTypes.STRING,
    activa: { type: DataTypes.BOOLEAN, defaultValue: true },
    eliminado: { type: DataTypes.BOOLEAN, defaultValue: false }
  });
};
