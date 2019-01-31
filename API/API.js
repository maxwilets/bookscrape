const db = require("../models")
const express = require("express")
const router= express.Router()


router.get("/saveder", (req, res)=>{
    db.Book.find({}).then(data=>res.json(data))
    
})
router.post("/save", (req,res)=>{
    console.log(req.body)
    db.Book.create({
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        link: req.body.link,
        image: req.body.thumbnail,
        googleId: req.body.id
    })
})
router.post("/delete/:id", (req,res)=>{
    db.Book.deleteOne({_id: req.params.id}).then(data=>res.json(data))
})


module.exports = router