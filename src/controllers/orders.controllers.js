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
         message: "Algo salio mal",
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
         message: "Algo salio mal",
      })
   }
}

module.exports = {
   createOrder,
   getOrder,
}
