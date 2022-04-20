import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav id="nav-prop">
            <NavLink to="/category/skate" className="navL">SKATE</NavLink>
            <NavLink to="/category/tablas" className="navL">TABLAS</NavLink>
            <NavLink to="/category/ruedas" className="navL">RUEDAS</NavLink>
            <NavLink to="/category/rulemanes" className="navL">RULEMANES</NavLink>
        </nav>
    )
}


export default NavBar