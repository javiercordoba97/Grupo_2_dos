const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require('path');
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

router.get('/register', userController.register );
router.get('/login', userController.login );
router.get('/profile/:id', userController.profile );
router.get('/edicionUsuario/:id', userController.edicionUsuario);
router.get('/session', userController.session);

router.post('/register',uploadFile.single("userImage") ,userController.registerProcess);

router.post('/session', userController.sessionProcess);


router.put('/edicionUsuario/:id',uploadFile.single("userImage"), userController.editarUsuario)

router.delete('/edicionUsuario/:id',userController.deleteUsuario)

module.exports = router;