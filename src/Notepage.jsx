import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "./context";
import { Link } from "react-router-dom";

const Notepage = () => {

    const { notes } = useContext(MyContext)
    const { id } = useParams()
    const note = notes.find((n) => n.id === id)
    
    return ( 
        <div>
           <Link to="/Notes"><span style={{width: '5rem'}} ><i className='bi bi-arrow-left-square-fill'></i></span></Link>

            <div className="container">
               <article>{note.content}</article>
            </div>
        </div>
     );
}
 
export default Notepage;