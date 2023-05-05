const express = require('express');
const cors = require('cors')
const phones = require('./phone.json')
const app = express();
const port = 5000;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('My phones information coming soon')
})
app.get('/phones',(req,res)=>{
    res.send(phones)
})
app.get('/phones/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const phone = phones.find(phone=>phone.id == id ) || {};
    res.send(phone)

})

app.listen(port,()=>{
    console.log(`My phone server running on port:${port}`)
})