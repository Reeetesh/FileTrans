const router = require("express").Router();
const File = require("../Models/file");
const fs = require("fs");
const path = require("path");
require('dotenv').config();

router.post("/files", async (req, res) => {
  try {
    // console.log(req.body.fileName);
    // console.log(req.body.myFile);
    const obj = new File({
      fileName: req.body.fileName,
      myFile: req.body.myFile,
      webShareCount: 0,
    });

    const response = await obj.save();
    res.send("Success");
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const file = await File.findOne({ fileName: req.params.id });
    if (!file) {
      return res.render("download", { error: "Link has expired" });
    }
     const type = file.myFile.split(";")[0].split("/")[1];
    let filePath = await `../filesStock/${req.params.id}.${type}`;
    let buffer = await Buffer.from(file.myFile.split(",")[1], "base64");
    await fs.writeFileSync(path.join(__dirname, filePath), buffer);
    return res.render("download", {
      fileName: file.fileName,
      myFile: file.myFile,
      counter: file.webShareCount,
      download_url: `https://filetrans.onrender.com/download/${req.params.id}`,
      type:type
    });
  } catch (err) {
    // return res.render('download',{error:'something went wrong'})
    res.send(err);
  }
});

module.exports = router;
///home/int225/Desktop/FileTransfer/router/fileRouter.js
