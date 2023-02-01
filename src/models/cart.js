const Sequelize = require("sequelize")
module.exports = (sequelize, DataTypes) => {
   return cart.init(sequelize, DataTypes)
}

/**
 * @openapi
 * components:
 *   schemas:
 *     add_cart:
 *       type: object
 *       properties:
 *         userId:
 *           type: number
 *           example: 3
 *         totalPrice:
 *           type: number
 *           example: 3000
 *     request_cart:
 *       type: object
 *       properties:
 *         userId:
 *           type: number
 *           example: 3
 *         totalPrice:
 *           type: number
 *           example: 3000
 *     update_cart:
 *       type: object
 *       properties:
 *         userId:
 *           type: number
 *           example: 3
 *         totalPrice:
 *           type: number
 *           example: 3000
 *     request_cart_products:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Product cart deleted
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */

class cart extends Sequelize.Model {
   static init(sequelize, DataTypes) {
      return super.init(
         {
            id: {
               autoIncrement: true,
               autoIncrementIdentity: true,
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true,
               references: {
                  model: "users",
                  key: "id",
               },
            },
            userId: {
               type: DataTypes.STRING,
               allowNull: false,
            },
            totalPrice: {
               type: DataTypes.STRING,
               allowNull: false,
            },
         },
         {
            sequelize,
            tableName: "cart",
            schema: "public",
            timestamps: false,
            indexes: [
               {
                  name: "cart_pkey",
                  unique: true,
                  fields: [{ name: "id" }],
               },
            ],
         }
      )
   }
}
