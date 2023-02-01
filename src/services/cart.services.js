const { cart, productInCart, product } = require("../models")

class CartServices {
   static async readCart(id) {
      try {
         const result = await cart.findOne({
            where: { id },
            attributes: {
               exclude: ["userId", "user_id"],
            },
            include: {
               model: productInCart,
               as: "products",
               attributes: {
                  exclude: ["cartId", "cart_id", "productId", "product_id"],
               },
               include: {
                  model: product,
                  as: "product",
                  attributes: ["id", "name", "price", "image"],
               },
            },
         })
         const totalPriceCartArray = await productInCart.findAll()
         const Cart = await cart.findOne({ where: { id } })
         const totalPriceCart = []
         totalPriceCartArray.forEach(async (total) => {
            totalPriceCart.push(total.price)
            const priceTotal = totalPriceCart.reduce((a, b) => a + b)
            await Cart?.update({ totalPrice: priceTotal })
         })
         return result
      } catch (error) {
         throw error
      }
   }
   static async addCart(id, prod) {
      try {
         const idProduct = prod.productId
         const priceProduct = await product.findOne({
            where: { id: idProduct },
         })
         const priceTotalProduct = prod.quantity * priceProduct?.price
         const result = await productInCart.create({
            ...prod,
            price: priceTotalProduct,
            cartId: id,
            productId: idProduct,
         })

         const totalPriceCartArray = await productInCart.findAll()
         const totalPriceCart = totalPriceCartArray.map((total) => {
            return total.price
         })
         const priceTotal = totalPriceCart.reduce((a, b) => a + b)
         const Cart = await cart.findOne({ where: { id } })
         const res = await Cart.update({ totalPrice: priceTotal })
         return result
      } catch (error) {
         throw error
      }
   }
   static async upCart(idCart, idProduct, quantity) {
      try {
         const prod = await productInCart.findAll({ where: { cartId: idCart } })
         prod.map(async (pro) => {
            if (Number(idProduct) === pro.dataValues.productId) {
               await pro.update(quantity)
            }
            if (Number(idProduct) === pro.dataValues.productId) {
               const priceProduct = await product.findOne({
                  where: { id: idProduct },
               })
               const price = pro.quantity * priceProduct.price
               await pro.update({ price: price })
            }
            const totalPriceCartArray = await productInCart.findAll()
            const Cart = await cart.findOne({ where: { id: idCart } })
            const totalPriceCart = []
            totalPriceCartArray.forEach(async (total) => {
               totalPriceCart.push(total.price)
               const priceTotal = totalPriceCart.reduce((a, b) => a + b)
               await Cart.update({ totalPrice: priceTotal })
            })
         })

         return prod
      } catch (error) {
         throw error
      }
   }
   static async delCart(idCart, idProduct) {
      try {
         const prod = await productInCart.findAll({ where: { cartId: idCart } })
         prod.map(async (pro) => {
            if (Number(idProduct) === pro.dataValues.id) {
               pro.destroy()
            }
            const totalPriceCartArray = await productInCart.findAll()
            const Cart = await cart.findOne({ where: { id: idCart } })
            const totalPriceCart = []
            totalPriceCartArray.forEach(async (total) => {
               totalPriceCart.push(total.price)
               const priceTotal = totalPriceCart.reduce((a, b) => a + b)
               await Cart.update({ totalPrice: priceTotal })
            })
         })

         return prod
      } catch (error) {
         throw error
      }
   }
}

module.exports = CartServices
