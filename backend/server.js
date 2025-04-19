
import {connectToServer, getDb} from "./connect.js";
import express from "express";
import cors from "cors";
import postRoutes from './postRoutes.js';

import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './uploads')
    },
    filename: function(req,file,cb){
        cb(null, Date.now()+ '-' + file.originalname)
    }
})

const upload = multer({storage})

app.post("/single", upload.single("image"), async (req,res)=>{
    const db = getDb();

    if (!req.file) {
      console.error("No file uploaded");
      return res.status(400).json({ error: "No file uploaded" });
    }
  
    const { originalname, filename, path } = req.file;
  
    const newPost = {
        Name: req.body.name,
        Description: req.body.description,
        Location: req.body.location,
        Image: filename, // or originalname if you prefer
        Date: new Date(req.body.date)
    };

  
    try {
      console.log("Inserting new post into database:", newPost); // log the post data
      const result = await db.collection("Found Items").insertOne(newPost);
      res.status(201).json(result);
    } catch (err) {
      console.error("Error inserting post:", err); // log error message
      res.status(500).json({ error: "Failed to save post" });
    }
});

app.post("/lost", upload.single("image"), async (req, res) => {
  const db = getDb();

  if (!req.file) {
    console.warn("No image uploaded — proceeding without image.");
  }

  const { originalname, filename } = req.file || {};

  const newLostItem = {
      Name: req.body.itemName,
      Description: req.body.description,
      Location: req.body.location,
      Image: filename || null,
      Date: new Date(req.body.date)
  };

  try {
      console.log("Inserting lost item into database:", newLostItem);
      const result = await db.collection("Lost Items").insertOne(newLostItem);
      res.status(201).json(result);
  } catch (err) {
      console.error("Error inserting lost item:", err);
      res.status(500).json({ error: "Failed to save lost item" });
  }
});


app.use('/', postRoutes);

app.listen(PORT, () =>{
    connectToServer()
    console.log(`Server is ruuning on port ${PORT}`) 
})


