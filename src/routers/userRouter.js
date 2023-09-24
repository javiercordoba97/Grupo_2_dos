const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require('path');
const {body, check, validationResult} = require ('express-validator');
const { builtinModules } = require('module');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        let folder = path.join(__dirname,'../../public/img/users')
        cb(null,folder)
    },
    filename:(req,file,cb)=>{
        let imageUser = Date.now()+path.extname(file.originalname)
        cb(null,imageUser)
    },
})
const uploadFile = multer({storage})

//validaciones
const ValidacionUsuario =[
    check('name')
    .notEmpty().withMessage('Debes completar el Nombre').bail()
    .isLength({min:4}).withMessage('El nombre es muy corto'),

    check('last_name')
    .notEmpty().withMessage('Debes completar el Apellido').bail()
    .isLength({min:4}).withMessage('El apellido es muy corto'),

    check('password')
    .notEmpty().withMessage('Escribir Contraseña').bail()
    .isLength({min:8}).withMessage('Contraseña insegura'),

    check('confirm-password')
    .notEmpty().custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Las contraseñas no coinciden');
        }
        return true;
      }),
      
    check('dni')
    .isIdentityCard().withMessage('DNI invalido'),

    check('tel')
    .isMobilePhone().withMessage('Numero de telefono invalido'),

    check('address')
    .notEmpty().withMessage('Debes completar la Dirección'),

    check('email')
    .isEmail().withMessage('Email invalido'),
]

router.get('/register', userController.register );
router.get('/login', userController.login );
router.get('/profile/:id', userController.profile );
router.get('/edicionUsuario/:id', userController.edicionUsuario)


router.post('/register',ValidacionUsuario ,uploadFile.single("userImage") ,userController.registerProcess);

router.put('/edicionUsuario/:id',uploadFile.single("userImage"), userController.editarUsuario)

router.delete('/edicionUsuario/:id',userController.deleteUsuario)

module.exports = router;