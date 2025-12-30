import React from 'react'
import Navbar from "../components/Navbar";
import axios from "axios";
import NoteCard from "../components/NoteCard.jsx"
import {useEffect,useState} from "react"
import NoNotes from '../components/NoNotes.jsx';


const HomePage = () => {
  const [notes,setNotes] = useState([]);
  const [loading,setLoading] = useState(true);
  
  useEffect(()=>{
     const fetchNotes = async ()=>{
      try{
        const res = await axios.get("http://localhost:5001/api/notes");  //axios is fetch + json parsing.
        setNotes(res.data);
      }
     catch(error){
      console.error(error);
     }

     finally{
      setLoading(false);
     }
  };
  fetchNotes();
  },[]);

    return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading your notes..</div>}

        {notes.length==0 && <NoNotes/>}

        {notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage
