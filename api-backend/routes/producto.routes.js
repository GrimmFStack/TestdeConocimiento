const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {
  getAll, search, create, update, delete: del
} = require("../controllers/producto.controller");

/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Lista todos los productos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get("/", auth, getAll);
/**
 * @swagger
 * /api/productos/search:
 *   get:
 *     summary: Buscar productos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: clave
 *         schema:
 *           type: string
 *       - in: query
 *         name: nombre
 *         schema:
 *           type: string
 *       - in: query
 *         name: marca
 *         schema:
 *           type: string
 *       - in: query
 *         name: fecha_alta
 *         schema:
 *           type: string
 *       - in: query
 *         name: fecha_mod
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Resultados de búsqueda
 */
router.get("/search", auth, search);
router.post("/", auth, create);
router.put("/:id", auth, update);
router.delete("/:id", auth, del);

module.exports = router;
