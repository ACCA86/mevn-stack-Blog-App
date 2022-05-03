const express = require('express')
const router = express.Router();
const multer = require('multer')
let fileStorage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
let upload = multer({
    storage:fileStorage,
});
//.fieldname + '_' + Date.now() + '_' + file.originalname + '_' + Date.now() + '_' + file.originalname
const API = require('../controller/api')

router.get('/',API.getPost)
router.get('/:id',API.getSinglePost)
router.post('/',upload.single("image"),API.createPost)
router.patch('/:id',upload.single("image"),API.updatePost)
router.delete('/:id',API.delPost)

module.exports = router