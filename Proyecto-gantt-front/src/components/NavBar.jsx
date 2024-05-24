import { Link, NavLink  } from "react-router-dom";
import './NavBar.css'
const NavBar = () => {
    return(
        <nav>
            
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/crearPolitica">Crear Politica</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Planificación</NavLink>
                </li>
                <li>
                    <NavLink to="/ejemplo">Ejemplo</NavLink>
                </li>
            </ul>
            <Link to="/" className="title">NombrePrograma</Link>
        </nav>
    )}

export default NavBar;