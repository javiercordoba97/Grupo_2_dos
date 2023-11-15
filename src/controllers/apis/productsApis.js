const { Association } = require("sequelize")
const db = require("../../database/models")

const controller ={
    list: async (req,res)=>{
        let respuesta = {
            count: 0,
            countByCategory:{},
            products: []
        }
        const [products,categories] = await Promise.all([db.Juego.findAll({include:[{association: "generos"}]}),db.generos.findAll({include:[{association: "Juegos"}]})])
        respuesta.count = products.length
        categories.forEach(categoria =>{
            respuesta.countByCategory[categoria.nombre] = categoria.Juegos.length
        });
            respuesta.products = products.map(row=>{
                return{
                    id: row.id,
                    name: row.name,
                    description: row.description,
                    category: row.generos,
                    detail: "/api/product/detail/"+row.id
                }
            });
            res.json(respuesta)
    },
    detail: async (req,res)=>{
        let product = await db.Juego.findByPk(req.params.id);
        let respuesta = {
            ...product,
            url_imagen: "img/products/"+product.img,
        }
        res.json(respuesta)
    },
}
module.exports = controller