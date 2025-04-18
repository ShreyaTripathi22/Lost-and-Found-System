
import {connectToServer} from "./connect.js";
import express from "express";
import cors from "cors";

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.listen(PORT, () =>{
    connectToServer()
    console.log(`Server is ruuning on port ${PORT}`) 
})
