const { Router } = require("express")

const {
   createProduct,
   getAllProducts,
   updateProduct,
   deleteProduct,
} = require("../controllers")

const authMiddleware = require("../middlewares/auth.middleware")

const router = Router()

/**
 * @openapi
 * /api/v1/users/:id/products:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     requestBody:
 *       description: Create a new product for the app
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/create_product"
 *     responses:
 *       201:
 *         description: created product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_product"
 *
 * /api/v1/products:
 *   get:
 *     summary: See all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Data displayed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_product"
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: See the data of a cart in the app
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: product Id
 *     responses:
 *       200:
 *         description: Data displayed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_product_delete"
 */

router.get("/products", authMiddleware, getAllProducts)

router.post("/products", authMiddleware, createProduct)

router.put("/products/:id", authMiddleware, updateProduct)

router.delete("/products/:id", authMiddleware, deleteProduct)

module.exports = router
