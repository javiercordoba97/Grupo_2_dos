const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const multer = require('multer')
const path = require('path');
const productController = require('../controllers/productController');
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



module.exports = router;