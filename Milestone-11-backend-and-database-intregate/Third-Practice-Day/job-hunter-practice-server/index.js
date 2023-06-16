const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
// middle ware 
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Job is running')
})


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.16yxiu9.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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

    const jobCollection = client.db('jobDB').collection('jobs');
    app.post('/addJob', async(req,res)=>{
        const job = req.body;
        const result = await jobCollection.insertOne(job);
        res.send(result)
    })

    app.get('/allJobs', async(req,res)=>{
        const cursor = jobCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })
    app.get('/singleJob/:id', async(req,res)=>{
      const id = req.params.id;
      const query = {_id:new ObjectId(id) };
      const result = await jobCollection.findOne(query);
      res.send(result)
    })

    app.get('/myJobs/:email', async(req,res)=>{
        const email = req.params.email;
        // console.log(email)
        const query = {email:email} ;
        const result = await jobCollection.find(query).toArray();
        res.send(result)
    })

    app.patch('/updateJob/:id', async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const option = { upsert: true};
      const job = req.body;
      // console.log(job)
      const updatedJob ={
        $set:{
            ...job
        }
      } 
      const result = await jobCollection.updateOne(query,updatedJob,option);
      res.send(result)
    })





    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port,()=>{
    console.log(`Job server is running on port:${port}`)
})