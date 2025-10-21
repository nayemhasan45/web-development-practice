const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000;

const app=express();

// middleware 
app.use(cors());
app.use(express.json());

// user = al-amin45
// pass = 6DgYlKorLWmk4civ
const uri = "mongodb+srv://al-amin45:6DgYlKorLWmk4civ@cluster1.szp5gbl.mongodb.net/?retryWrites=true&w=majority&appName=cluster1";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("usersDB");
    const users = database.collection("users")

    app.get('/users',async(req,res)=>{
        const cursor = users.find();
        const result = await cursor.toArray();
        res.send(result);
    })
    
    
    app.post('/users',async (req,res)=>{
        const newUser = req.body;
        const result = await users.insertOne(newUser);
        
        console.log('added to db :',result.insertedId)
        res.send(result);
    })

    app.delete('/users/:id',async (req,res)=>{
      const id = req.params.id;
      console.log(id);
      const quary = {_id:new ObjectId(id)};
      const result = await users.deleteOne(quary);
      res.send(result);
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
  }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('hollo from server');
})

app.listen(port,()=>{
    console.log('my server is running on port : ',port);
})