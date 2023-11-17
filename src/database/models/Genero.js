const { Sequelize } = require(".")

module.exports = (sequelize, dataTypes) => {
    let alias = "generos"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(255)
        }
    }
    let config = {
        tableName: "generos",
        timestamps: false,
    }
    const generos = sequelize.define(alias, cols, config)

    generos.associate = function(models){
        generos.hasMany(models.Juego,{
            foreignKey: "id_genero",
            as: "Juego"
        })
    } 

    return generos
} 