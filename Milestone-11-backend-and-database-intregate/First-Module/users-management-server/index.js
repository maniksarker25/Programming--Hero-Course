const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json())

const users =[
    {
        id:1,
        name:'savana',
        email:'savana@gmail.com'
    },
    {
        id:2,
        name:'sabila',
        email:'sabila@gmail.com'
    },
    {
        id:3,
        name:'sojib',
        email:'sojib@gmail.com'
    },
    {
        id:4,
        name:'sukkor',
        email:'sukkor@gmail.com'
    },
]

app.get('/',(req,res)=>{
    res.send("User management server is running")
})


app.get('/users',(req,res)=>{
    res.send(users)
})

app.post('/users',(req,res)=>{
    console.log('post api hitting')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`)
})