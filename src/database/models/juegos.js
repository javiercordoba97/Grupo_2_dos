const { Sequelize } = require(".")

module.exports = (sequelize, dataTypes) => {
    let alias = "juegos"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING
        },
        precio:{
            type: dataTypes.DECIMAL(8, 2)
        },
        descripcion:{
            type: dataTypes.TEXT
        },
        stock:{
            type: dataTypes.TINYINT
        },
        imagen:{
            type: dataTypes.STRING(255)
        },
        fecha:{
            type: dataTypes.DATE
        },
        rating:{
            type: dataTypes.DECIMAL(8, 2)
        },
        created:{
            type: dataTypes.DATEONLY
        },
        updated:{
            type: dataTypes.DATEONLY
        },
        deleted:{
            type: dataTypes.DATEONLY
        }
    }
    let config = {
        tableName: "juegos",
        timestamps: true,
        paranoid: true,
        deletedAt: "deleted",
        createdAt: "created",
        updatedAt: "updated"
    }
    const juegos = sequelize.define(alias, cols, config)


    return juegos
} 