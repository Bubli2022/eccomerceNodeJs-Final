const Sequelize = require("sequelize")
module.exports = (sequelize, DataTypes) => {
   return order.init(sequelize, DataTypes)
}

/**
 * @openapi
 * components:
 *   schemas:
 *     request_orders:
 *       type: object
 *       properties:
 *         totalPrice:
 *           type: number
 *           example: 3000
 *         userId:
 *           type: number
 *           example: 3
 *         status:
 *           type: boolean
 *           example: true
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */

class order extends Sequelize.Model {
   static init(sequelize, DataTypes) {
      return super.init(
         {
            id: {
               autoIncrement: true,
               autoIncrementIdentity: true,
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true,
            },
            totalPrice: {
               type: DataTypes.INTEGER,
               allowNull: false,
            },
            userId: {
               type: DataTypes.INTEGER,
               allowNull: false,
               references: {
                  model: "users",
                  key: "id",
               },
            },
            status: {
               type: DataTypes.BOOLEAN,
               allowNull: true,
               defaultValue: false,
            },
         },
         {
            sequelize,
            tableName: "order",
            schema: "public",
            timestamps: false,
            indexes: [
               {
                  name: "order_pkey",
                  unique: true,
                  fields: [{ name: "id" }],
               },
            ],
         }
      )
   }
}
