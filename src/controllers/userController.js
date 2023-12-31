const fs = require('fs');
const path = require('path');
const {validationResult} = require ('express-validator');
const bcrypt = require('bcryptjs');
let listaUsuarios = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/users.json'),'utf-8'));
const db = require("../database/models");
const usuario = db.Usuario;


const userController = {
    register: async (req, res)=>{
        res.render('users/register')
    },
    registerProcess: async (req,res)=>{
        console.log(req.body)
        let usuarioNuevo = await usuario.create({
            "id":Date.now() + Math.round(Math.random()* 1E9),
            "foto": req.file ? req.file.filename : "defaultUsers.png",
            "nombre": req.body.name,
            "apellido": req.body.last_name,
            "email": req.body.email,
            "contraseña": bcrypt.hashSync (req.body.password, 10),
            "telefono": req.body.name,
            "borrado": false,
            "id_rol": 2
    })
    const resultValidation = validationResult (req);
    if (resultValidation.errors.length > 0){
        return res.render('/register',{
            errors: resultValidation.mapped(),
            oldData: req.body
        });
        }
        /*let userInDB = User.findByField('email',req.body.email);

        if (userInDB){
            return res.render('/register', {
                errors:{
                    email:{
                        msg:'Este email ya esta registrado'
                    }
                },
            oldData: req.body    
        });
    }
    let userToCreate = {
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.file.filename
    }
       let userCreated = User.create(userToCreate);
       
       return res.redirect('/');*/
    },
    /*session: (req,res)=>{
        if(req.body.email){
            req.session.usuario = req.body
            res.cookie('usuario', req.body.email, {maxAge:300000})
            res.render('/')
        }
        res.redirect('/')
    },
    sessionProcess: (req,res)=>{
        res.redirect('/')
    },*/
    login: async (req, res)=>{
        res.render('users/login')
    },
    loginProcess: async (req,res)=>{
        let userToLogin = usuario.findfindByPk('email', req.body.email);

        if (userToLogin){

        }
        return res.render('users/login', {
            errors:{
                email:{
                    msg: 'el email no estra registrado'
                }
            }
        })
    },
    profile: async (req, res)=>{
        let usuarioEncontrado = await usuario.findfindByPk(req.params.id, {paranoid: false})
        res.render('users/profile', {usuario: usuarioEncontrado})
    },

    edicionUsuario: async (req, res)=>{
        let usuarioEncontrado = await usuario.findfindByPk(req.params.id)
        res.render('users/edicionUsuario', {usuario: usuarioEncontrado})
    },
    editarUsuario: async (req,res)=>{
        let usuarioEncontrado = await usuario.update({ 
            "id": usuarioEncontrado.id,
            "img": req.file ? req.file.filename : "defaultUsers.png",
            "usuario": req.body.users,
            "contraseña": req.body.password,
            "email": req.body.email,
            "borrado": false
        }, {where: {id: req.params.id}})
        res.redirect('/profile/' + usuarioEncontrado.id)
    },
    deleteUsuario: async (req, res)=>{
        const usuarioEliminado = await usuario.destroy({where: {id: req.params.id}})
        res.redirect('/')
    }
}

//const userController = {
/*    register: (req, res)=>{
        res.render('users/register')
    },
    login: (req, res)=>{
        res.render('users/login')
    },
    registerProcess:(req,res)=>{
        let usuarioNuevo = {
            "id":Date.now() + Math.round(Math.random()* 1E9),
            "img": req.file ? req.file.filename : "defaultUsers.png",
            "nombre": req.body.name,
            "apellido": req.body.last_name,
            "contraseña": bcrypt.hashSync (req.body.password, 10),
            "dni": req.body.name,
            "telefono": req.body.name,
            "direccion": req.body.address,
            "email": req.body.email,
            "borrado": false
    }
        listaUsuarios.push(usuarioNuevo)
        fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(listaUsuarios,null,2),'utf-8')
        res.redirect('/')
    },
    profile: (req, res)=>{
        let usuarioEncontrado = listaUsuarios.find((p)=> p.id == req.params.id)
        res.render('users/profile', {usuario: usuarioEncontrado})
    },
    edicionUsuario: (req, res)=>{
        let usuarioEncontrado = listaUsuarios.find((p)=> p.id == req.params.id)
        res.render('users/edicionUsuario', {usuario: usuarioEncontrado})
    },
    editarUsuario:(req,res)=>{
        let usuarioEncontrado = listaUsuarios.find((p)=> p.id == req.params.id)
        let indice= listaUsuarios.indexOf(usuarioEncontrado)
        usuarioEncontrado = {
            "id": usuarioEncontrado.id,
            "img": req.file ? req.file.filename : "defaultUsers.png",
            "usuario": req.body.users,
            "contraseña": req.body.password,
            "email": req.body.email,
            "borrado": false
        }
        listaUsuarios[indice]= usuarioEncontrado
        console.log(listaUsuarios)
        fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(listaUsuarios,null,2),'utf-8')
        res.redirect('/')
    },
    deleteUsuario: (req, res)=>{
        let usuarioEncontrado = listaUsuarios.find((p)=> p.id == req.params.id)
        usuarioEncontrado.borrado=true
        fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(listaUsuarios,null,2),'utf-8')
        res.redirect('/')
    },
}*/

module.exports = userController;