const { Association } = require("sequelize")
const db = require("../../database/models")

const controller ={
    list: async (req,res)=>{
        let respuesta = {
            count: 0,
            countCategory:{},
            products: []
        }
        const [products,categories] = await Promise.all([db.Product.findAll({include:[{association: "Category"}]}),db.Category.findAll({include:[{association: "Product"}]})])
        respuesta.count = products.length
        categories.forEach(categoria =>{
            respuesta.countByCategory[categoria.name] = categoria.Product.length
        });
            respuesta.products = products.map(row=>{
                return{
                    id: row.id,
                    name: row.name,
                    description: row.description,
                    category: row.Category,
                    detail: "/api/product/detail/"+row.id
                }
            });
            res.json(respuesta)
    },
    detail: async (req,res)=>{
        res.json()
    },
}
module.exports = controller