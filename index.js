const express = require('express');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello My personal node.js')
})

const users =[
    { id:1, name:'sakib', email:'sakib@gmail.com', phone:'01712333333' },
    { id:2, name:'sabana', email:'sabana@gmail.com', phone:'01712333333' },
    { id:3, name:'Sabnur', email:'Sabnur@gmail.com', phone:'01712333333' },
    { id:4, name:'suchona', email:'suchona@gmail.com', phone:'01712333333' },
    { id:5, name:'saila', email:'saila@gmail.com', phone:'01712333333' },
    { id:6, name:'rakib', email:'rakib@gmail.com', phone:'01712333333' },
    { id:7, name:'santo', email:'santo@gmail.com', phone:'01712333333' },
]

app.get('/users',(req, res) =>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase() .includes(search))
    }
    else{
        res.send(users)
    }
    
})

app.get('/user/:id', (req, res)=>{
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user)
})
app.post('/user', (req, res) => {
    console.log(req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push = (user)
    res.send(user)
})

app.listen(port, () =>[
    console.log('Listening to port', port)
])

