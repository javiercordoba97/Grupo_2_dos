

module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING
        },
        apellido:{
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING(40)
        },
        telefono:{
            type: dataTypes.INTEGER
        },
        foto:{
            type: dataTypes.STRING(255)
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
        tableName: "usuarios",
        timestamps: true,
        paranoid: true,
        deletedAt: "deleted",
        createdAt: "created",
        updatedAt: "updated"
    }
    const usuarios = sequelize.define(alias, cols, config)


    return usuarios
} 