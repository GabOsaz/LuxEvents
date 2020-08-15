const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;

app.use(fileUpload({
    useTempFiles: true
}));

cloudinary.config({
    cloud_name: 'omo-cloud',
    api_key: '244864298151684',
    api_secret: 'process.env.API_SECRET',
})

router.post('/upload', (req, res) => {
    const file = req.files.photo;
    console.log(file);
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        if(err) throw Error(err);
        res.send({
            success: true,
            result
        });
        console.log(result);
    })
})