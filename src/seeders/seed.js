const Cart = require("../models/cart")
const Order = require("../models/order")
const Product = require("../models/product")
const Users = require("../models/users")
const ProductInCart = require("../models/productInCart")
const ProductInOrder = require("../models/productInOrder")
const initModels = require("../models/init-models")
const db = require("../utils/database")

initModels(db)

const users = [
   {
      username: "Adolph",
      email: "adolph@gmail.com",
      password: "5436yhn",
   },
   {
      username: "Richard",
      email: "richard@gmail.com",
      password: "98745okn",
   },
   {
      username: "Ronny",
      email: "ronny@gmail.com",
      password: "kiujg9875",
   },
   {
      username: "Ricardo",
      email: "ricardo@gmail.com",
      password: "98ujnr456",
   },

   {
      username: "Pappu",
      email: "pappu@gmail.com",
      password: "dsfsdf3456",
   },
   {
      username: "Pappu",
      email: "pappu@gmail.com",
      password: "dsfsdf3456",
   },
]

const cart = [
   { userId: 1, totalPrice: 10000 },
   { userId: 2, totalPrice: 21000 },
   { userId: 3, totalPrice: 32000 },
   { userId: 4, totalPrice: 43000 },
   { userId: 5, totalPrice: 54000 },
   { userId: 6, totalPrice: 65000 },
]

const order = [
   {
      totalPrice: 10000,
      userId: 1,
   },
   {
      totalPrice: 21000,
      userId: 2,
   },
   {
      totalPrice: 32000,
      userId: 3,
   },
   {
      totalPrice: 43000,
      userId: 4,
   },
   {
      totalPrice: 54000,
      userId: 5,
   },
   {
      totalPrice: 65000,
      userId: 6,
   },
]

const product = [
   {
      name: "Afeitadora Phillips",
      price: 10000,
      availableQty: 10,
      status: true,
      userId: 1,
   },
   {
      name: "Licuadora Atma",
      price: 21000,
      availableQty: 10,
      status: true,
      userId: 2,
   },
   {
      name: "sanguchera Luqstoff",
      price: 32000,
      availableQty: 10,
      status: true,
      userId: 3,
   },
   {
      name: "microondas Whirpool",
      price: 43000,
      availableQty: 10,
      status: true,
      userId: 4,
   },
   {
      name: "Lavarropa Samsung",
      price: 54000,
      availableQty: 10,
      status: true,
      userId: 5,
   },
   {
      name: "Tv Led 60pulg Samsung",
      price: 650000,
      availableQty: 10,
      status: true,
      userId: 6,
   },
]

const productInCart = [
   { cartId: 1, productId: 1, quantity: 1, price: 10000 },
   { cartId: 2, productId: 2, quantity: 1, price: 21000 },
   { cartId: 3, productId: 3, quantity: 1, price: 32000 },
   { cartId: 4, productId: 4, quantity: 1, price: 43000 },
   { cartId: 5, productId: 5, quantity: 1, price: 54000 },
   { cartId: 6, productId: 6, quantity: 1, price: 65000 },
]

const productInOrder = [
   { orderId: 1, productId: 1, quantity: 1, price: 10000 },
   { orderId: 2, productId: 2, quantity: 1, price: 21000 },
   { orderId: 3, productId: 3, quantity: 1, price: 32000 },
   { orderId: 4, productId: 4, quantity: 1, price: 43000 },
   { orderId: 5, productId: 5, quantity: 1, price: 54000 },
   { orderId: 6, productId: 6, quantity: 1, price: 65000 },
]

db.sync({ force: true })
   .then(() => {
      console.log("Iniciando la plantacion de informacion")
      users.forEach((user) => Users.create(user))
      setTimeout(() => {
         product.forEach((product) => Product.create(product))
      }, 0)

      setTimeout(() => {
         cart.forEach((cart) => Cart.create(cart))
      }, 300)

      setTimeout(() => {
         order.forEach((order) => Order.create(order))
      }, 600)

      setTimeout(() => {
         productInCart.forEach((productInCart) =>
            ProductInCart.create(productInCart)
         )
      }, 900)

      setTimeout(() => {
         productInOrder.forEach((productInOrder) =>
            ProductInOrder.create(productInOrder)
         )
      }, 1200)
   })
   .catch((error) => console.log(error))
