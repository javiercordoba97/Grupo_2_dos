const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        let folder = path.join(__dirname,'../../public/img')
        cb(null,folder)
    },
    filename:(req,file,cb)=>{
        let imageName = Date.now()+path.extname(file.originalname)
        cb(null,imageName)
    },
})
const uploadFile = multer({storage})

router.get('/', mainController.home );
router.get('/product/:id', mainController.detalle);
router.get('/register', mainController.register );
router.get('/login', mainController.login );
router.get('/cart', mainController.cart );
router.get('/edicion/:id', mainController.edicion );
router.get('/creacion', mainController.creacion );

router.post('/creacion',uploadFile.single("image") ,mainController.crearProcess)

router.put('/edicion/:id',uploadFile.single("image"), mainController.editarProcess)

router.put('/edicion/:id',mainController.deleteProcess)

module.exports = router;