const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require("fs");
const app=express();
const sizeOf = require('image-size')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
cb(null,"./");},
filename:function(req,file,cb){
    const ext=file.mimetype.split("/")[1];
    cb(null,`uploads/${file.originalname}`);
}
});
const upload=multer({
    storage:storage
});
app.use(cors({
    origin:true,
    methods:["GET","POST"],
    credentials:true,
}));

const mysql=require('mysql');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'webprog'

});
connection.connect();
const path = require('path');
app.post("/api/image",upload.single('image'),(req,res,err)=>
{
    const dimensions = sizeOf(`uploads/${req.file.originalname}`);
    if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        res.send({ msg:'Only image files (jpg, jpeg, png) are allowed!'});
    }
    else if(dimensions.height>1000 ||dimensions.width>1000)
    {
        fs.unlink(`uploads/${req.file.originalname}`, err => {
            console.log(err);
          });
        res.send({ msg:'File is too large (only 1000 x 1000 is allowed)'});
        
    }
    else{
    const image = req.file.filename;
    const sqlInsert = `INSERT INTO images (image) VALUES ('${image}')`;
connection.query(sqlInsert, (err, result) => {
    if(err)
    {
console.log(err)
res.send
({msg:err})
    }
    if(result)
    {
        console.log("uploaded");
        res.send({
            data:result,
            msg:"image has been updated"
        });
    }
});
}  
});
app.use("/uploads", express.static(__dirname + '/uploads'));
//app.use('/', express.static(path.join(__dirname, '/')));
app.get("/api/image",(req,res)=>{
    const id=1;
    const sqlSelect="SELECT * FROM images"
    connection.query(sqlSelect,[id],(err,result)=>
    {
        if(err)
        {
            console.log(err)
            res.send({
                msg:err
            })
        }
        if(result)
        {
            res.send({
                
                images:result,
            })
        }
    })
})
const port=32000;
app.listen(port,()=>console.log("App is running"));