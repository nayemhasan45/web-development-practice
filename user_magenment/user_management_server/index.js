const express = require("express");
const cors = require('cors')
const app=express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const users = [
    {id:1,name:'al-amin',email:'nayemhasan75907@gmail.com'},
    {id:2,name:'hossain',email:'bigbossnayem@gmail.com'},
    {id:3,name:'nayem',email:'nayemboss10133@gmail.com'},
]

app.get('/',(req,res)=>{
    // res.send(users);
    res.send('this is form user management server')
})
app.get('/users',(req,res)=>{
    res.send(users);
})
app.post('/users',(req,res)=>{
    console.log('post massage hit');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length+1;
    // add to databse 
    users.push(newUser);
    res.send(newUser);
})
app.delete('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const updatedUsers = users.filter(user=>user.id!==id)
    users.length=0;
    users.push(...updatedUsers);
    res.json({ message: `User with id ${id} deleted successfully`, users });
    
})
app.listen((port),()=>{
    console.log(`server is running at prot : ${port}`);
})