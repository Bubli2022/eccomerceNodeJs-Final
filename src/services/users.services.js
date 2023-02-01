const { users, product } = require("../models/")

class UserServices {
   static async getAll() {
      try {
         const result = await users.findAll()
         return result
      } catch (error) {
         throw new error()
      }
   }

   static async getWithProducts(id) {
      try {
         const result = await users.findOne({
            where: { id },
            attributes: {
               exclude: ["password"],
            },
            include: {
               model: product,
               as: "product",
            },
         })
         return result
      } catch (error) {
         throw error
      }
   }

   static async create(user) {
      try {
         const result = await users.create(user)
         return result
      } catch (error) {
         throw error
      }
   }

   static async update(id, field) {
      try {
         const result = await users.update(field, { where: { id } })
         return result
      } catch (error) {
         throw error
      }
   }

   static async delete(id) {
      try {
         const result = await users.destroy({ where: { id } })
         return result
      } catch (error) {
         throw error
      }
   }
}

module.exports = UserServices
