const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Producto", {
    clave: DataTypes.STRING,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    precio: DataTypes.FLOAT,
    eliminado: { type: DataTypes.BOOLEAN, defaultValue: false }
  });
};
