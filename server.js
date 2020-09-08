const express=require('express')
const app=express()
app.use((req,res,next)=>{
    let CurrDate=new Date()
    let Hours=CurrDate.getHours()
    if(Hours<9||Hours>18){
        res.send("<h1>closed</h1>")
    }
    next()

})
app.get('/contact',(req,res)=>{
res.sendFile(__dirname+'/public/contact.html')
})

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+ '/public/home.html')
})

app.get('/service',(req,res)=>{
res.sendFile(__dirname+'/public/service.html')
})
app.listen(4000,(er)=>{if(er)console.log(er)
    else console.log("server connected on port 4000")})