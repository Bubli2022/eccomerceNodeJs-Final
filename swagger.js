const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
require("dotenv").config()

const options = {
   apis: [
      "./src/routes/auth.routes.js",

      "./src/routes/products.routes.js",
      "./src/models/product.js",

      "src/routes/orders.routes.js",
      "src/models/order.js",

      "src/routes/cart.routes.js",
      "src/models/cart.js",

      "/src/routes/users.routes.js",
      "./src/models/users.js",
   ],
   definition: {
      openapi: "3.0.0",
      info: {
         title: "Ecommerce en node js",
         version: "0.0.9",
         description: "API para aplicación de ecommerce",
      },
   },
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
   app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
   app.get("/api/v1/docs.json", (req, res) => {
      res.setHeader({ "Content-type": "application/json" })
      res.send(swaggerSpec)
   })
   console.log(
      `La documentación está disponible en ${process.env.URL} : ${port} /api/v1/docs`
   )
}

module.exports = swaggerDocs
