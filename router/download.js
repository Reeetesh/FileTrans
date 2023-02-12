const router = require("express").Router();
const File = require("../Models/file");
const fs = require("fs");
const path = require("path");

router.get('/:id',async (req,res)=>{
    try{
    const file = await File.findOne({ fileName: req.params.id });
    const type = file.myFile.split(";")[0].split("/")[1];
    const response = await file.save();
    const fileP = await `${__dirname}/../filesStock/${req.params.id}.${type}`
    res.download(fileP)
    }catch(err){
        res.send(err)
    }
})

module.exports = router;