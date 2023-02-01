const { product } = require("../models")

class ProductService {
   static async getAll() {
      try {
         const result = await product.findAll()
         return result
      } catch (error) {
         throw error
      }
   }

   static async create(todo) {
      try {
         const result = await product.create(todo)
         return result
      } catch (error) {
         throw error
      }
   }

   static async update(id, field) {
      try {
         const result = await product.update(field, { where: { id } })
         return result
      } catch (error) {
         throw error
      }
   }

   static async delete(id) {
      try {
         const result = await product.destroy({ where: { id } })
         return result
      } catch (error) {
         throw error
      }
   }
}

module.exports = ProductService
