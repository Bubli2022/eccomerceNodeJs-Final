const {
   users,
   product,
   order,
   cart,
   productInOrder,
   productInCart,
} = require("../models")
const initModels = require("../models/init-models")
const db = require("../utils/database")

initModels(db)

const Users = [
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
      email: "pappu2@gmail.com",
      password: "dsfsdedewwv56",
   },
   {
      username: "Pappu",
      email: "pappu@gmail.com",
      password: "dsfsdf3456",
   },
]

const Cart = [
   { userId: 1, totalPrice: 10000 },
   { userId: 2, totalPrice: 21000 },
   { userId: 3, totalPrice: 32000 },
   { userId: 4, totalPrice: 43000 },
   { userId: 5, totalPrice: 54000 },
   { userId: 6, totalPrice: 65000 },
]

const Order = [
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

const Product = [
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

const ProductInCart = [
   { cartId: 1, productId: 1, quantity: 1, price: 10000 },
   { cartId: 2, productId: 2, quantity: 1, price: 21000 },
   { cartId: 3, productId: 3, quantity: 1, price: 32000 },
   { cartId: 4, productId: 4, quantity: 1, price: 43000 },
   { cartId: 5, productId: 5, quantity: 1, price: 54000 },
   { cartId: 6, productId: 6, quantity: 1, price: 65000 },
]

const ProductInOrder = [
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

      Users.forEach((user) => users.create(user))
      setTimeout(() => {
         Product.forEach((prod) => product.create(prod))
      }, 0)

      setTimeout(() => {
         Cart.forEach((Car) => cart.create(Car))
      }, 400)

      setTimeout(() => {
         Order.forEach((ord) => order.create(ord))
      }, 800)

      setTimeout(() => {
         ProductInCart.forEach((productInCar) =>
            productInCart.create(productInCar)
         )
      }, 1200)

      setTimeout(() => {
         ProductInOrder.forEach((productInOrd) =>
            productInOrder.create(productInOrd)
         )
      }, 1600)
   })
   .catch((error) => console.log(error))
