const { login, register } = require("./auth.controller.js")

const {
   seeCart,
   addProducts,
   updateCart,
   deleteCart,
} = require("./cart.controllers")

const { createOrder, getOrder } = require("./orders.controllers")

const {
   getAllProducts,
   createProduct,
   updateProduct,
   deleteProduct,
} = require("./products.controllers")

const {
   getAllUsers,
   getUserWithProducts,
   createUser,
   updateUser,
   deleteUser,
} = require("./users.controllers")

module.exports = {
   login,
   addProducts,
   seeCart,
   createOrder,
   getOrder,
   register,
   updateCart,
   deleteCart,
   getAllUsers,
   getUserWithProducts,
   createUser,
   updateUser,
   deleteUser,
   getAllProducts,
   createProduct,
   updateProduct,
   deleteProduct,
}

// module.exports = models
