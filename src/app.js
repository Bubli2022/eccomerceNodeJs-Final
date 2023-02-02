const express = require("express")
const db = require("./utils/database")
const cors = require("cors")
const morgan = require("morgan")
const routerApi = require("./routes")
const error = require("./middlewares/error.middleware")

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))

routerApi(app)

db.authenticate()
   .then(() => console.log("Autenticación exitosa"))
   .catch((err) => console.log(err))

db.sync({ alter: true })
   .then(() => console.log("Conexión exitosa"))
   .catch((err) => console.log(err))

app.get("/", (req, res) => {
   res.status(200).json({
      status: "Respuesta exitosa",
      description:
         "Prueba esta API con SWAGGER en el siguiente <a href='#'' target='new_blank'> https://ecommerce-perezariel.up.railway.app/ </a>",
      link: process.env.HOST,
   })
})

app.use(error)

module.exports = app
