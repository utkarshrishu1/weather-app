const express=require('express');
const path=require('path');
const fetch_Weather=require('./API/fetch-weather');
const app=express();
const port=process.env.PORT||3000;
app.use(express.static(path.join(__dirname,'../web-page'))); 
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'../web-page/handlebars'));
app.get('',(req,res)=>{
    res.render('Home');
});
app.get('/weatherInfo',async (req,res)=>{
    let location=req.query.location;
    res.send(await fetch_Weather(location));
});
app.get('*',(req,res)=>{
    res.send('<h1>Error 404!Page Not found...</h1>');
});
app.listen(port,()=>{
    console.log("Server running!!!!");
})