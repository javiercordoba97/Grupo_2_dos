let fs = require('fs')
let path = require('path')

let listaProductos = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json'),'utf-8')) 
let listaUsuarios = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json'),'utf-8'))

const controller = {
    home: (req, res)=>{
        let productosNoDelete=listaProductos.filter(p=>p.borrado==false)
        res.render('products/home',{productos: productosNoDelete})
    },
}

module.exports = controller;