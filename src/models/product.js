const Sequelize = require("sequelize")
module.exports = (sequelize, DataTypes) => {
   return product.init(sequelize, DataTypes)
}

/**
 * @openapi
 * components:
 *   schemas:
 *     request_product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Samsung
 *         price:
 *           type: number
 *           example: 4000
 *         availableQty:
 *           type: number
 *           example: 5
 *         status:
 *           type: boolean
 *           example: true
 *         userId:
 *           type: number
 *           example: 1
 *     create_product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Samsung
 *         price:
 *           type: number
 *           example: 40000
 *         availableQty:
 *           type: number
 *           example: 5
 *         status:
 *           type: boolean
 *           example: true
 *     update_product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Samsung
 *         price:
 *           type: number
 *           example: 40000
 *         availableQty:
 *           type: number
 *           example: 5
 *     request_product_delete:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: product deleted
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */

class product extends Sequelize.Model {
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
            name: {
               type: DataTypes.STRING,
               allowNull: false,
            },
            price: {
               type: DataTypes.INTEGER,
               allowNull: false,
            },
            ImageUrl: {
               type: DataTypes.STRING,
               allowNull: true,
            },
            availableQty: {
               type: DataTypes.INTEGER,
               allowNull: false,
            },
            status: {
               type: DataTypes.BOOLEAN,
               allowNull: false,
            },
            userId: {
               type: DataTypes.INTEGER,
               allowNull: true,
               references: {
                  model: "users",
                  key: "id",
               },
            },
         },
         {
            sequelize,
            tableName: "product",
            schema: "public",
            timestamps: false,
            indexes: [
               {
                  name: "product_pkey",
                  unique: true,
                  fields: [{ name: "id" }],
               },
            ],
         }
      )
   }
}
