import './NewNote.css'
import { Link } from "react-router-dom"
import blanknoteicon from "./images/icons8-open-book-94.png"
import { MyContext } from "./context"
import { useContext } from "react"
import { useState } from 'react'





const NewNote = () => {

    const [noteContent, setNoteContent] = useState("")
    const { addNote } = useContext(MyContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (noteContent.trim() !== '') {
          addNote(noteContent.trim());
          setNoteContent('');
        }
      };
      
    
    return ( 
        <div>
            <Link to="/"><div className="backbutton d-flex justify-content-start pt-0 align-contents-end"><i className='bi bi-arrow-left-square-fill'></i></div></Link>
            
            <h2 className=" mx-auto d-flex justify-content-center text-primary"><img src={blanknoteicon} style={{width: '7rem'}}/></h2>
            <form onSubmit={handleSubmit}>
                <textarea type="text" value={noteContent} onChange={(e) => setNoteContent(e.target.value)} className="notearea border-0 rounded mx-auto d-flex justify-content-center align-items-center" rows="12" col="70s" id="newnote" placeholder="Enter your note here"></textarea>
                
                <p className="d-flex justify-content-center mt-5">
                    <button type="submit" className="btn btn-lg btn-dark px-5"><span>Add Note</span></button>
                </p>
            </form>
        </div>
     );
}
 
export default NewNote;