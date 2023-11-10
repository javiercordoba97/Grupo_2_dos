const db = require("../../database/models")

const controller ={
    list: async (req,res)=>{
        let respuesta = {
            count: 0,
            users: []
        }
        let users = await db.Usuario.findAll()
        respuesta.count = users.length
        respuesta.users =users.map(row =>{
            return{
                id: row.id,
                name: row.nombre + " " + row.apellido,
                email: row.email,
                detail: "/api/user/detail/" + row.id
            }
        })
        req.json(respuesta)
    },
    detail: async (req,res)=>{
        let user = await db.Usuario.findByPk(req.params.id,{attributes:{exclude:["id_rol","password"]}});
        let respuesta = {
            ...user,
            url_imagen: "img/users/"+user.img,
        }
        req.json(respuesta)
    },

}
module.exports = controller