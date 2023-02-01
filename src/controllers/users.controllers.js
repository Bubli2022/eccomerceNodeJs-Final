const { userServices } = require("../services")

const getAllUsers = async (req, res) => {
   try {
      const result = await userServices.getAll()
      res.status(200).json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

const getUserWithProducts = async (req, res) => {
   try {
      const { id } = req.params
      const result = await userServices.getWithProducts(id)
      res.json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

const createUser = async (req, res) => {
   try {
      const newUser = req.body
      const result = await userServices.create(newUser)
      res.status(201).json(result)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

const updateUser = (req, res) => {
   res.json({ message: "Actualizando usuario" })
}

const deleteUser = (req, res) => {
   res.json({ message: "eliminando un usuario" })
}

module.exports = {
   getAllUsers,
   createUser,
   updateUser,
   deleteUser,
   getUserWithProducts,
}
