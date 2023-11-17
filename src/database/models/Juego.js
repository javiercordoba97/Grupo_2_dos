
module.exports = (sequelize, dataTypes) => {
    let alias = "Juego"
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
        },
        id_genero:{
            type: dataTypes.INTEGER
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
    const Juego = sequelize.define(alias, cols, config)

    Juego.associate = function(models){
        Juego.belongsTo(models.generos,{
            foreignKey: "id_genero",
            as: "generos"
        })
    }

    return Juego
} 