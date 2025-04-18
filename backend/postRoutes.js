import express from "express";
import { getDb } from "./connect.js";
import { ObjectId } from "mongodb";

let postRoutes = express.Router()

// #1- Retrieve All
// http://localhost:3000/posts

postRoutes.route("/posts").get(async (request, response) => {
    let db = getDb()
    let data = await db.collection("posts").find({}).toArray()
    if(data.length >0){
        response.json(data)
    }
        else{
            response.status(404).json({ error: "Data was not found :(" });
        }
})

//#2 Retrieve One
postRoutes.route("/posts/:id").get(async (request, response) => {
    let db = getDb()
    let data = await db.collection("posts").findOne({_id: new ObjectId(request.params.id)});
     if(Object.keys(data).length>0){
        response.json(data)
    }
        else{
            response.status(404).json({ error: "Data was not found :(" });
        }
})

//#3 create one
postRoutes.route("/posts").post (async (request, response) => {
    let db = database.getDb()
    let mongoObject = {
        name : request.body.name,
        description : request.body.description,
        location : request.body.location,
    }
    let data = await db.collection("posts").insertOne(mongoObject)
     response.json(data)
})

//#4 delete one

postRoutes.route("/posts/:id").delete(async (request, response) => {
    let db = database.getDb();
    let data = await db.collection("posts").deleteOne({_id: new ObjectId(request.params.id)});
    response.json(data)
});

export default postRoutes;

