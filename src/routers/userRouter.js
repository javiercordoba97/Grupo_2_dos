const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer')
const path = require('path')
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
router.post('/register',uploadFile.single("userImage") ,userController.registerProcess)
router.get('/login', userController.login )
router.get('/profile/:id', userController.profile )




router.post('/register', userController.registerProcess)


module.exports = router;