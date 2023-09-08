let fs = require('fs')
let path = require('path')

let listaProductos = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json'),'utf-8')) 

const controller = {
    home: (req, res)=>{
        let productosNoDelete=listaProductos.filter(p=>p.borrado==false)
        res.render('home',{productos: productosNoDelete})
    },
    detalle:(req, res)=>{
        let productoEncontrado = listaProductos.find((p)=> p.id == req.params.id)
        res.render('product', {producto: productoEncontrado})
    },
    register: (req, res)=>{
        res.render('register')
    },
    login: (req, res)=>{
        res.render('login')
    },
    cart: (req, res)=>{
        res.render('cart')
    },
    creacion: (req, res)=>{
        res.render('creacion')
    },
    crearProcess:(req,res)=>{
        let productoNuevo = {
            "id":listaProductos.length+1,
            "titulo": req.body.titulo,
            "precio": req.body.precio,
            "descuento": req.body.descuento,
            "img": req.file ? req.file.filename : "default.png",
            "plataforma": req.body.plataforma,
            "formato": req.body.formato,
            "multijugador": req.body.multijugador,
            "online": req.body.online,
            "description": req.body.description
    }
        listaProductos.push(productoNuevo)
        fs.writeFileSync(path.join(__dirname,'../data/productos.json'),JSON.stringify(listaProductos,null,2),'utf-8')
        res.redirect('/')
    },
    edicion: (req, res)=>{
        let productoEncontrado = listaProductos.find((p)=> p.id == req.params.id)
        res.render('edicion', {producto: productoEncontrado})
    },
    editarProcess:(req,res)=>{
        let productoEncontrado = listaProductos.find((p)=> p.id == req.params.id)
        let indice= listaProductos.indexOf(productoEncontrado)
        productoEncontrado = {
            "id":productoEncontrado.id,
            "titulo": req.body.titulo,
            "description": req.body.description,
            "precio": req.body.precio,
            "descuento": req.body.descuento,
            "img": "RedDead2.jpg"
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

    }
    
}

module.exports = controller;