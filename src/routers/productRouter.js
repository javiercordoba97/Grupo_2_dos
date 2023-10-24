const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        let folder = path.join(__dirname,'../../public/img/products')
        cb(null,folder)
    },
    filename:(req,file,cb)=>{
        let imageName = Date.now()+path.extname(file.originalname)
        cb(null,imageName)
    },
})
const uploadFile = multer({storage})
router.get('/product/:id', productController.detalle);
router.get('/cart', productController.cart );
router.get('/edicion/:id', productController.edicion );
router.get('/creacion', productController.creacion);
router.get('/restauracion', productController.restauracion);

router.post('/creacion', uploadFile.single("image"), productController.crearProcess);
router.put('/edicion/:id',uploadFile.single("image"), productController.editarProcess);
router.delete('/edicion/:id',productController.deleteProcess);



module.exports = router;