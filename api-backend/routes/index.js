const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const productoRoutes = require("./producto.routes");
const marcaRoutes = require("./marca.routes");

router.use("/auth", authRoutes);
router.use("/productos", productoRoutes);
router.use("/marcas", marcaRoutes);

module.exports = router;
