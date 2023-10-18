let fs = require('fs')
let path = require('path')
const { Sequelize } = require('../database/models')
const db = require("../database/models")

let listaProductos = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json'),'utf-8')) 
let listaUsuarios = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json'),'utf-8'))
/* Controlador con Base de Datos */

const controller = {
    home: async (req, res)=>{
        let productosNoDelete = await db.juegos.findAll({
            order: [['rating', 'DESC' ]],
            limit: 12
        })
        res.render('products/home',{productos: productosNoDelete})
    },
    deportes: async function (req, res) {
        let productoEncontrado = await db.juegos.findAll({where: {categoria: req.params.categoria}})
        res.render ('products/deportesyCarreras', {producto: productoEncontrado})
    }
}


/* Controlador Sin Base de Datos */
/*
const controller = {
    home: (req, res)=>{
        let productosNoDelete=listaProductos.filter(p=>p.borrado==false)
        res.render('products/home',{productos: productosNoDelete})
    },
}
*/
module.exports = controller;