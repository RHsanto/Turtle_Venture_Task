const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;
const express = require('express');
const cors = require('cors')
const app =express();
const port = process.env.PORT || 8000;

//midalware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mr-travel-app.aqkf7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {

  try {
    await client.connect();
    const database = client.db("allDataCollection");
    const UserCollection = database.collection("userCollection");
    
   

 // GET API REVIEWS
 app.get('/users', async (req,res)=>{
  const cursor = UserCollection.find({});
  const bus = await cursor.toArray();
  res.send(bus);

 });

 
 
  // GET SINGLE OFFERS
  app.get('/users/:id', async (req,res)=>{
    const id = req.params.id;
    const query = {_id: ObjectId(id)};
    const booking = await UserCollection.findOne(query)
  res.json(booking);
  });
  
  // here put booking data
  app.post('/user', async (req,res) => {
    const user = req.body;
    const result = await UserCollection.insertOne(user);
    res.json( result)
  })




  } 
  
  finally {
   // await client.close();
  }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
  res.send('Running the server on Radio Station');
})
app.listen(port, () => {
  console.log('Running the server on Radio Station',port)
})
