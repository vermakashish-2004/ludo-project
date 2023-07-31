const express=require("express")
const app=express()
const port=8005



app.use(express.static('public'))
app.use('./css',express.static(__dirname+'public/css'))
app.use('./js',express.static(__dirname+'public/js'))
app.use('./img',express.static(__dirname+'public/img'))
  

app.get('',(req,res)=>{
  res.sendFile(__dirname+'/view/indexh.html')
})

app.listen(port,()=> console.info('listening the port ${port}'))