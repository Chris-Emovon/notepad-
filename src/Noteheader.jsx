import "bootstrap-icons/font/bootstrap-icons.css"
import Noteicon from "./images/icons8-moleskine-94.png"

const Noteheader = () => {

    
   
    return ( 
        <div>
            <h1 className="header">
             <img src={Noteicon}  style={{width: '3rem'}}/> Notepad 
            </h1>
        </div>
     );
}
 
export default Noteheader;