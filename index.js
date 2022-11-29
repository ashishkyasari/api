const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {data} =  require('./dataModel.js');
const app = express();


app.use(cors());



const MongoDBURI = "mongodb+srv://Ashish177:1234@cluster0.ihbzate.mongodb.net/?retryWrites=true&w=majority";

 mongoose.connect(MongoDBURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(console.log("connected")).catch((e)=>console.log(e));


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get('/curse',async (req,res)=>{
    const dat = await data.findById('63830a36de4d81571449fc98')
    res.send(dat.badWords); 
})
 


const port = 5000;
app.listen(port,()=>{
    try {
        console.log(`Working on ${port}`)
    } catch (error) {
        console.log(error)
    }
}) 