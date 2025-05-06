const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {
  getAll, create, update, delete: del, activate, deactivate
} = require("../controllers/marca.controller");

/**
 * @swagger
 * /api/marcas:
 *   get:
 *     summary: Lista todas las marcas
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de marcas
 */
router.get("/", auth, getAll);
/**
 * @swagger
 * /api/marcas/activar:
 *   patch:
 *     summary: Activa una marca
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Marca activada
 */
router.post("/", auth, create);
router.put("/:id", auth, update);
router.delete("/:id", auth, del);
router.patch("/:id/activar", auth, activate);
router.patch("/:id/desactivar", auth, deactivate);

module.exports = router;
