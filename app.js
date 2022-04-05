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