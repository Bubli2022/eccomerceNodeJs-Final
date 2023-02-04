const { ordersServices } = require("../services")

const createOrder = async (req, res, next) => {
   try {
      const { id } = req.params
      const result = await ordersServices.postOrder(id)
      res.status(201).json(result)
   } catch (error) {
      next({
         status: 400,
         errorContent: error,
         message: "Somethings wrong",
      })
   }
}
const getOrder = async (req, res, next) => {
   try {
      const { id } = req.params
      const result = await ordersServices.getOrder(id)
      res.json(result)
   } catch (error) {
      next({
         status: 400,
         errorContent: error,
         message: "Somethings wrong",
      })
   }
}

module.exports = {
   createOrder,
   getOrder,
}
