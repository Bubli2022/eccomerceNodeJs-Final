const initModels = require("./init-models")
const db = require("../utils/database")

const models = initModels(db)

const { users, product, order, cart, productInOrder, productInCart } = models

module.exports = {
   users,
   product,
   order,
   cart,
   productInOrder,
   productInCart,
}
