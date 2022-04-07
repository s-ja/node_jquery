const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))

//  라우팅
app.get("/",function(req,res){
    // res.send("server is running!")
    // static file
    res.sendFile(_dirname+"/public/index.html")
}).listen(port,function(){
    console.log("server port : "+port)
})

app.get("/index2",function(req,res){
    res.sendFile(_dirname+"/public/index2.html")
})
app.get("/slider",function(req,res){
    // res.send("server is running!")
    // static file
    res.sendFile(_dirname+"/public/bx_slider.html")
})