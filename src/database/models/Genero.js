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
    const Genero = sequelize.define(alias, cols, config)

    Genero.associate = function(models){
        Genero.hasMany(models.Juego,{
            foreignKey: "genero_id",
            as: "Juegos"
        })
    }

    return generos
} 