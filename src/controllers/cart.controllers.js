const { cartServices } = require("../services")

const seeCart = async (req, res, next) => {
   try {
      const { id } = req.params
      const result = await cartServices.readCart(id)
      res.status(201).json(result)
   } catch (error) {
      next({
         status: 400,
         errorContent: error,
         message: "Something wrong",
      })
   }
}

const addProducts = async (req, res, next) => {
   try {
      const { id } = req.params
      const body = req.body
      const result = await cartServices.addCart(id, body)
      res.status(201).json(result)
   } catch (error) {
      next({
         status: 400,
         errorContent: error,
         message: "Something wrong",
      })
   }
}

const updateCart = async (req, res, next) => {
   try {
      const { cartId, productId } = req.params
      const quatity = req.body
      const result = await cartServices.upCart(cartId, productId, quatity)
      res.json(result)
   } catch (error) {
      next({
         status: 400,
         errorContent: error,
         message: "Something wrong",
      })
   }
}
const deleteCart = async (req, res, next) => {
   try {
      const { cartId, productId } = req.params
      const result = await cartServices.delCart(cartId, productId)
      res.json({ message: "Product deleted" })
   } catch (error) {
      next({
         status: 400,
         errorContent: error,
         message: "Something wrong",
      })
   }
}

module.exports = {
   addProducts,
   seeCart,
   updateCart,
   deleteCart,
}
