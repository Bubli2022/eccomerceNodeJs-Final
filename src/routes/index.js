const authRoutes = require("./auth.routes")
const usersRoutes = require("./users.routes")
const productsRoutes = require("./products.routes")
const cartRoutes = require("./cart.routes")
const ordersRoutes = require("./orders.routes")

const routerApi = (app) => {
   app.use("/api/v1/auth", authRoutes)
   app.use("/api/v1/users", usersRoutes)
   app.use("/api/v1", productsRoutes)
   app.use("/api/v1", cartRoutes)
   app.use("/api/v1", ordersRoutes)
}

module.exports = routerApi
