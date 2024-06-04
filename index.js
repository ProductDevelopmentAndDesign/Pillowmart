import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {insertelement} from './query.js';
const app =express();
const __filename = fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);
app.use(express.json());
app.use(express.static(path.join(__dirname,'/')));
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',async(req,res)=>{ 
    return res.sendFile(path.join(__dirname,'/index.html'));
})

app.post('/index.html',async(req,res)=>{
    await insertelement(req,res);
    return res.redirect('/');
})


app.listen(3000,(req,res)=>{
    console.log("listening to port 3000");

})
