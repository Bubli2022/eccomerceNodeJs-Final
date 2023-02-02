const { productServices } = require("../services")

const createProduct = async (req, res) => {
   try {
      const prod = req.body
      const result = await productServices.create(prod)
      res.json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

const getAllProducts = async (req, res) => {
   try {
      const result = await productServices.getAll()
      res.json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

const updateProduct = async (req, res) => {
   try {
      const { id } = req.params
      const result = await productServices.update(id)
      res.json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

const deleteProduct = async (req, res) => {
   try {
      const { id } = req.params
      const result = await productServices.delete(id)
      res.json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

module.exports = {
   getAllProducts,
   createProduct,
   updateProduct,
   deleteProduct,
}
