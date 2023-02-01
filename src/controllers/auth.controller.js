const { authServices } = require("../services")
const transporter = require("../utils/mailer")

const register = async (req, res) => {
   try {
      const user = req.body
      const result = await authServices.register(user)

      if (result) {
         res.status(201).json({ message: "user created" })
         await transporter.sendMail({
            to: result.email,
            from: "bublicius2010@gmail.com",
            subject: "Email confirmation",
            html: "<h1>Bienvenido a la mejor app de chat creada por mi</h1> <p>Tienes que confirmar tu email</p><p> Solo haz click en el siguiente <a href='#'' target='new_blank'> enlace </a>",
         })
      } else {
         res.status(400).json({ message: "something wrong" })
      }
   } catch (error) {
      res.status(400).json(error.message)
   }
}

const login = async (req, res) => {
   try {
      const { email, password } = req.body
      if (!email) {
         res.status(400).json({
            error: "Missing data",
            message: " Not email or password provided",
         })
      }
      if (!password) {
         res.status(400).json({
            error: "Missing data",
            message: " Not email or password provided",
         })
      }
      const result = await authServices.login({ email, password })
      if (result.isValid) {
         const { username, id, email } = result.user
         const userData = { username, id, email }
         const token = authServices.genToken(userData)
         userData.token = token
         res.json(userData)
      } else {
         res.status(400).json({ message: "User noy found" })
      }
   } catch (error) {
      res.status(400).json({ message: "Something wrong" })
   }
}

module.exports = {
   register,
   login,
}
