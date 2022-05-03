const Post = require('../models/post')
const fs = require("fs")

module.exports = class API{

    ///// Get All Post /////
    static async getPost(req,res){
        const post = await Post.find();
        res.status(200).json(post)
    }
    
    ///// Get Single Post /////
    static async getSinglePost(req,res){
        const id=req.params.id
        try {
            const post = await Post.findById(id)
            res.status(200).json(post)
        } catch (err) {
            res.status(404).json({msg:err.msg})
        }
    }

    ///// Create New Post /////
    static async createPost(req,res){
        const post = req.body;
        const imagename = req.file.filename;
        post.image = imagename;
       try {
        await Post.create(post)
        res.status(201).json({message:'Post Done'})
       } catch (error) {
           res.status(404).json({msg:error.msg})
       }
        console.log(post.image)
    }
     ///// Edit Yout Post /////
    static async updatePost(req,res){
        const id = req.params.id
        let new_img = '';
        if(req.file){
             new_img = req.file.filename;
            try {
                fs.unlinkSync('./uploads'+req.body.old_img)
            } catch (error) {
                console.log(error);
            }
        }else{
            new_img = req.body.old_img
        }
        const post = req.body;
        post.image = new_img;
        try {
            await Post.findByIdAndUpdate(id,post)
            res.status(200).send('Uploaded Done...')
        } catch (err) {
            res.status(404).json({msg:err.msg})
        }
    }
     //// Delete Your Post ////
    static async delPost(req,res){
        const id = req.params.id
        try {
            await Post.findByIdAndDelete(id)
            res.status(200).send('Delete Done...')
        } catch (err) {
            res.status(404).json({msg:err.msg})
        }

    }

}