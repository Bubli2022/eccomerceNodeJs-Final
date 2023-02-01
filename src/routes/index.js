const authRoutes = require("./auth.routes")
const usersRoutes = require("./users.routes")
const productsRoutes = require("./products.routes")
const cartRoutes = require("./cart.routes")
const ordersRoutes = require("./orders.routes")

const routerApi = (app) => {
   app.use("/api/v1/auth", authRoutes)
   app.use("/api/v1/users", usersRoutes)
   app.use("/api/v1/products", productsRoutes)
   app.use("/api/v1/cart", cartRoutes)
   app.use("/api/v1/orders", ordersRoutes)
}

module.exports = routerApi
