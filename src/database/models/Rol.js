module.exports = (sequelize, dataTypes) => {
    let alias = "Rol"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "roles",
        timestamps: true,
        paranoid: true
    }
    const Rol = sequelize.define(alias, cols, config)

    Rol.associate = function(models){
        Rol.hasMany(models.Usuario,{
            foreignKey: "id_rol",
            as: "roles"
        })
    }

    return Rol
} 