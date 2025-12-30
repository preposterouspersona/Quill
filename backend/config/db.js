import mongoose from "mongoose";

  const connectDB = async ()=>{

    try{
        await mongoose.connect("mongodb+srv://pranavadithyarao_db_user:5D7miPHZihHr9kP9@cluster0.3i3rgiq.mongodb.net/?appName=Cluster0");
        console.log("connected to db.");
    }
    catch(error){
        console.error("error connecting to db.");
    }
}

export default connectDB;