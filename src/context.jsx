import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'


export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    
    const [notes, setNotes] = useState([])

    const addNote = (content) => {
      setNotes([...notes, { id: uuidv4(), content }]);
  };


    
        const handleDelete = (id) => {
          const updateNotes = notes.filter((note) =>  note.id !== id)
          setNotes(updateNotes)
        }

        useEffect(() => {
          const storedNotes = localStorage.getItem("notes");
          setNotes(storedNotes ? JSON.parse(storedNotes) : []);
        }, []);
      
        useEffect(() => {
          localStorage.setItem("notes", JSON.stringify(notes));
        }, [notes]);
        
        
       
           
  return (
    <MyContext.Provider value={{ notes, addNote, handleDelete }}>
      {children}
    </MyContext.Provider>
  );
};
