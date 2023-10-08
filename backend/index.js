const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// Middelware Setup
app.use(cors());
app.use(express.json());

// require dot env
require("dotenv").config();

// Connect MongoDB
const uri = `${process.env.DB_CONNECTION}`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function dbConnect() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      console.log("database Connected");
    } catch (error) {
      res.send({
        success: true,
        message: error.message,
      });
    }
  }
  dbConnect().catch(console.dir);

/*
DATABASE CONNECTION NAME
=====================================================
*/
// const databaseName = client.db(" ").collection(" ");



app.get("/", (req, res) => {
  res.send("[Project Name] Server is Running");
});

app.listen(port, () => {
  console.log(`The Server Running Port is ${port}`);
});
