let fs = require('fs')
let path = require('path')
const db = require("../database/models")
const { body } = require('express-validator')
const juegos = db.Juego


let listaProductos = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json'),'utf-8'))


// Controlador con Base de Datos 
const productController = {
    detalle: async (req, res) => {
        let productoEncontrado = await juegos.findByPk(req.params.id, {paranoid: false})
        res.render ('products/product', {producto: productoEncontrado})
    },
    cart: async (req, res) => {
        res.render('products/cart')
    },
    creacion: (req, res) =>{
        res.render('products/creacion')
    },

    crearProcess: async function (req,res) {
        let productoNuevo = await db.Juego.create({
            "nombre": req.body.nombre,
            "precio": req.body.precio,
            "imagen": req.file ? req.file.filename : "default.png",
            "fecha": req.body.estreno,
            "id_genero": req.body.categoria,
            "descripcion": req.body.descripcion,
            "rating": req.body.rating,
            "stock": true
            
        })
        res.redirect('/' /*'/product/' + productoNuevo.id*/)
    },
    edicion: async function (req, res) {
        let productoEncontrado = await juegos.findByPk(req.params.id)
        res.render ('/edicion', {producto: productoEncontrado})
    },
    editarProcess: async function (req,res) {
        let productoEncontrado = await juegos.update({
            "id": productoEncontrado.id,
            "nombre": req.body.nombre,
            "precio": req.body.precio,
            "descuento": req.body.descuento,
            "imagen": req.file ? req.file.filename : "default.png",
            "estreno": req.body.fecha,
            "categoria": req.body.id_genero,
            "descripcion": req.body.descripcion,
            "rating": req.body.rating,
            "borrado": false 
        }, {where: {id: req.params.id}})
        res.redirect('/product/' + productoEncontrado.id)
    },
    deleteProcess: async function (req, res) {
        const productoEliminado = await juegos.destroy({where: {id: req.params.id}})
        res.redirect('/')
    },
    restauracion: async function (req, res) {
        const productoRestaurado = await juegos.restore({where: {id: req.params.id}})
        res.redirect('/')
    }         
}

// Controlador sin Base de Datos 
/*
const productController = {
    home: (req, res)=>{
        let productosNoDelete=listaProductos.filter(p=>p.borrado==false)
        res.render('products/home',{productos: productosNoDelete})
    },
    detalle:(req, res)=>{
        let productoEncontrado = listaProductos.find((p)=> p.id == req.params.id)
        res.render('products/product', {producto: productoEncontrado})
    },
    cart: (req, res)=>{
        res.render('products/cart')
    },
    creacion: (req, res)=>{
        res.render('products/creacion')
    },
    crearProcess:(req,res)=>{
        let productoNuevo = {
            "id":listaProductos.length+1,
            "titulo": req.body.titulo,
            "precio": req.body.precio,
            "descuento": req.body.descuento,
            "img": req.file ? req.file.filename : "default.png",
            "estreno": req.body.estreno,
            "categoria": req.body.categoria,
            "multijugador": req.body.multijugador,
            "online": req.body.online,
            "description": req.body.description,
            "borrado": false
    }

        listaProductos.push(productoNuevo)
        fs.writeFileSync(path.join(__dirname,'../data/productos.json'),JSON.stringify(listaProductos,null,2),'utf-8')
        res.redirect('/')
    },
    edicion: (req, res)=>{
        let productoEncontrado = listaProductos.find((p)=> p.id == req.params.id)
        res.render('products/edicion', {producto: productoEncontrado})
    },
    editarProcess:(req,res)=>{
        let productoEncontrado = listaProductos.find((p)=> p.id == req.params.id)
        let indice= listaProductos.indexOf(productoEncontrado)
        productoEncontrado = {
            "id": productoEncontrado.id,
            "titulo": req.body.titulo,
            "precio": req.body.precio,
            "descuento": req.body.descuento,
            "img": req.file ? req.file.filename : "default.png",
            "estreno": req.body.estreno,
            "categoria": req.body.categoria,
            "multijugador": req.body.multijugador,
            "online": req.body.online,
            "description": req.body.description,
            "borrado": false
        }
        listaProductos[indice]= productoEncontrado
        console.log(listaProductos)
        fs.writeFileSync(path.join(__dirname,'../data/productos.json'),JSON.stringify(listaProductos,null,2),'utf-8')
        res.redirect('/')
    },
    deleteProcess: (req, res)=>{
        let productoEncontrado = listaProductos.find((p)=> p.id == req.params.id)
        productoEncontrado.borrado=true
        fs.writeFileSync(path.join(__dirname,'../data/productos.json'),JSON.stringify(listaProductos,null,2),'utf-8')
        res.redirect('/')
    },
}
*/

module.exports = productController;