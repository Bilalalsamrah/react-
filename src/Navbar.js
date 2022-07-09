import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
<nav className="navbar">

    <h1> dogo blogs</h1>
    <Link to="/" className="links" >home</Link>
    <Link to="/Create" className="links">new blog</Link>
    <Link to="/" className="links">start</Link>
    <Link to="/" className="links">start</Link>

</nav>




     );
}
 
export default Navbar;