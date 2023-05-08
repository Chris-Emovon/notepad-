import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import './Notes.css'
import { Link } from "react-router-dom"
import background from "./images/sammy-line-man-with-blank-notepad-and-pencil.png"
import deleteicon from "./images/icons8-delete-48.png"
import editicon from "./images/icons8-ball-point-pen-48.png"
import { MyContext } from "./context"
import { useContext } from "react"

const Notes = () => {

    const { notes } = useContext(MyContext)

    const { handleDelete } = useContext(MyContext)


    return (   
        <div className="note">
            <h3>Notes</h3>
            
             <Link to="/NewNote"><div className="addnote"><i className="bi bi-plus-square-fill"></i></div></Link>
            {notes.map((note) => (
                <div key={note.id} className="card">
                    <div className="card-body">
                        <p className="card-text">{note.content.substring(0,50)}....</p>
                    </div>
                    
                    
                    <h5>
                      <span style={{display: "flex"}}>
                        <button className="editicon  mx-auto d-flex justify-content-end border-0 "><img id="edit"src={editicon} /></button>
                        <img src={deleteicon} alt="Delete" onClick={() => handleDelete(note.id)} />
                       </span>
                    </h5>
                </div>
            ))}
        </div>
    );
}
 
export default Notes;