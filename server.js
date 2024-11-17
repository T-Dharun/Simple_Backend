const express=require('express');
const app=express();
const port=3000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello Eroder!');
});
app.get('/home',(req,res)=>{
    res.send('Hello Home!');
});
app.post('/',(req,res)=>{
    res.send(req.body?.name + 'Hello World!');
});
app.listen(port,()=>console.log(`Example app listening on port ${port}!`));