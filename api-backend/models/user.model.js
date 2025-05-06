const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    name: DataTypes.STRING,
  });

  User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
  });

  return User;
};
