import mongoose from "mongoose"

const noteSchema= new mongoose.Schema({
    title: {
    type:String,
    required:true
    }, 
    content: {
        type:String,
        required:true
    },
},
    {timestamps:true}
);

//database schema for notes : title+content+timestamp.

const Note = mongoose.model("Note",noteSchema);
export default Note;