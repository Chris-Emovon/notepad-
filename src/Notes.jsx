import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import './Notes.css'
import { Link } from "react-router-dom"
import background from "./images/sammy-line-man-with-blank-notepad-and-pencil.png"
import deleteicon from "./images/icons8-delete-48.png"
import editicon from "./images/icons8-ball-point-pen-48.png"
import { MyContext } from "./context"
import { useContext } from "react"
import casual from "./images/casual-life-3d-open-book-mockup.png"

const Notes = () => {

    const { notes } = useContext(MyContext)

    const { handleDelete } = useContext(MyContext)


    return (   
        <div className="note">
            <h3>Notes</h3>
            
             <Link to="/NewNote"><div className="addnote"><i className="bi bi-plus-square-fill"></i></div></Link>

            {notes.length === 0 ? 
            <div className="d-flex justify-content-center mt-5">
                <div><img style={{width: '20rem'}} src={casual} /></div><br /> 
                <h4 className="d-flex justify-content-center mt-5 ">You don't have any notes yet click <br /> the plus icon to create a new note</h4> </div>:
            notes.map((note) => (
                <div key={note.id} className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.content.substring(0,35)}...</p>
                    </div>
                    <Link to={`/Notepage/${note.id}`}><button className="read d-flex justify-content-center btn btn-xs btn-dark mx-4 my-3 bg-primary border-0">Read More</button></Link>
                    
                    
                    <h5>
                      <span style={{display: "flex"}}>
                        <button className="editicon  mx-auto d-flex justify-content-end border-0 "><img id="edit"src={editicon} /></button>
                        <img id="deletenote" src={deleteicon} alt="Delete" onClick={() => handleDelete(note.id)} />
                       </span>
                    </h5>
                </div>
            ))}
            
        </div>
    );
}
 
export default Notes;