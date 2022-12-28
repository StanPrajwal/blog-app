import {Link} from "react-router-dom"
import "./Navbar.css"
function Navbar(){
    
    return <>
        <header>
            <h1>Blog App</h1>
        <nav>
            
            <Link to="/home">Home</Link>
            <Link to="/createblog">Create</Link>
            <Link to="/">LogOut</Link>
        </nav>
        
        </header>
        
    </>
}

export default Navbar