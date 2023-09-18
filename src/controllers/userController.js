let fs = require('fs')
let path = require('path')

let listaUsuarios = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json'),'utf-8'))

const userController = {
    register: (req, res)=>{
        res.render('users/register')
    },
    login: (req, res)=>{
        res.render('users/login')
    },
    registerProcess:(req,res)=>{
        let usuarioNuevo = {
            "id":Date.now() + Math.round(Math.random()* 1E9),
            "img": req.file ? req.file.filename : "defaultUsers.png",
            "usuario": req.body.users,
            "contraseña": req.body.password,
            "email": req.body.email
    }
    
        listaUsuarios.push(usuarioNuevo)
        fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(listaUsuarios,null,2),'utf-8')
        res.redirect('/')
    },
    profile: (req, res)=>{
        let usuarioEncontrado = listaUsuarios.find((p)=> p.id == req.params.id)
        res.render('users/profile', {usuario: usuarioEncontrado})
    }
}

module.exports = userController;