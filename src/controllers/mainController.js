const controller = {
    home: (req, res)=>{
        res.render('home')
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
    },
    
}

module.exports = controller;