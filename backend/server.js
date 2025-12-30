import express from "express";
const app = express()
import notesRoutes from "./routes/notesRoutes.js"
import connectDB from "./config/db.js"
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
app.use(cors());
app.use(express.json()); //middleware to parse json after a request/response.
app.use("/api/notes", notesRoutes);
connectDB();




const server = app.listen(process.env.PORT, ()=>{
    console.log("server running");
}); 

