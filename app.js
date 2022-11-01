const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');


require('dotenv/config');


app.use(bodyParser.json());

const postsRoute=require('./routes/expense');

app.use('/expense',postsRoute);

app.get('/',(req,res)=>{
    res.send("haii everyone");
});



mongoose.connect(
process.env.DB_CONNECTION,
()=>console.log('connected to DB')
);


app.listen(3000,(req,res)=>{
    console.log("listening to server");
});
