const { Sequelize } = require(".")

module.exports = (sequelize, dataTypes) => {
    let alias = "juegos"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primeryKey: true,
            autoIncrement: true,
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
            type: dataTypes.DATETIME
        },
        rating:{
            type: dataTypes.DECIMAL(8, 2)
        },
        created:{
            type: dataTypes.DATETIME
        },
        updated:{
            type: dataTypes.DATETIME
        },
        deleted:{
            type: dataTypes.DATETIME
        },
        id_genero:{/* FK */}
    }
    let config = {
        tableName: "juegos",
        timestamps: false,
    }
    const juegos = sequelize.define(alias, cols, config)


    return juegos
} 