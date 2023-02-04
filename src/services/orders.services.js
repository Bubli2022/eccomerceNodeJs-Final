const {
   users,
   productInOrder,
   cart,
   productInCart,
   product,
   order,
} = require("../models")

// const transporter = require("../utils/mailer")
// const orderTemplate = require("../templates/newOrder")

class OrdersServices {
   static async postOrder(id) {
      try {
         const allProducts = await productInCart.findAll()
         const Cart = await cart.findOne({ where: { id } })
         const Order = await order.create({
            totalPrice: Cart.totalPrice,
            status: Cart.status,
            userId: id,
         })
         const quantityArr = []
         allProducts.forEach((prod) => {
            quantityArr.push(prod.quantity)
         })
         // const quantity = quantityArr.reduce((a, b) => a + b)

         allProducts.forEach(async (prod) => {
            const Product = await product.findOne({ where: prod.productId })
            // const images = ;
            const orderProducts = await productInOrder.create({
               nameProduct: Product.dataValues.name,
               quantity: prod.quantity,
               price: prod.price,
               status: prod.status,
               orderId: Order.id,
               productId: prod.productId,
               images: Product.dataValues.image,
            })

            Product.update({
               availableQty: Product.availableQty - prod.quantity,
            })
         })

         Cart.update({
            status: true,
            totalPrice: 0,
         })

         const user = await users.findOne({ where: { id } })

         // transporter.sendMail({
         //    from: "<arielMarcos@gmail.com>",
         //    to: user.email,
         //    subject: `Gracias por preferir a My shop`,
         //    text: `Haz realizado la compra de ${quantity} productos por un total de ${Order.totalPrice}`,
         //    html: orderTemplate(user.username, quantity, Order.totalPrice),
         // })

         allProducts.forEach(async (prod) => {
            await prod.destroy()
         })
         return Order
      } catch (error) {
         throw error
      }
   }
   static async getOrder(id) {
      try {
         const result = await users.findOne({
            where: { id },
            attributes: ["username"],
            include: {
               model: order,
               as: "purchased",
               attributes: {
                  exclude: ["userId", "user_id"],
               },
               include: {
                  model: productInOrder,
                  as: "orders",
                  attributes: {
                     exclude: [
                        "orderId",
                        "order_id",
                        "productId",
                        "product_id",
                     ],
                  },
               },
            },
         })
         // const purchase = await Orders.findAll();
         const quantityProd = await productInOrder.findAll()
         const arrPrice = []
         const arrQuantity = []

         quantityProd?.forEach((purch) => {
            arrPrice.push(purch.dataValues.price)
            arrQuantity.push(purch.dataValues.quantity)
         })

         const aditionArrQuantity = arrQuantity.reduce((a, b) => a + b)
         const priceTotal = arrPrice.reduce((a, b) => a + b)

         result.dataValues.totalPrice = priceTotal
         result.dataValues.totalProducts = aditionArrQuantity

         return result
      } catch (error) {
         throw error
      }
   }
}

module.exports = OrdersServices
