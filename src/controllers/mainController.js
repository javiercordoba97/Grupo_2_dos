let fs = require('fs')
let path = require('path')

let listaProductos = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json'),'utf-8')) 

const controller = {
    home: (req, res)=>{
        res.render('home',{productos: listaProductos})
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
            "description": req.body.description,
            "precio": req.body.precio,
            "descuento": req.body.descuento,
            "img": "RedDead2.jpg"
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
    }
    /*
    productRedDead2: (req, res)=>{
        res.render('detalleRedDead2')
    },
    productHorizon: (req, res)=>{
        res.render('detalleHorizon')
    },
    productAssassins: (req, res)=>{
        res.render('detalleAssassins')
    },
    productWitcher: (req, res)=>{
        res.render('detalleWitcher')
    },
    productDonQuijote: (req, res)=>{
        res.render('detalleDonQuijote')
    },
    productOdisea: (req, res)=>{
        res.render('detalleOdisea')
    },
    productCrimen: (req, res)=>{
        res.render('detalleCrimen')
    },
    product1984: (req, res)=>{
        res.render('detalle1984')
    },*/
    
}

module.exports = controller;