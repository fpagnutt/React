import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav id="nav-prop">
            <NavLink to="/category/electronics" className="navL">Electronics</NavLink>
            <NavLink to="/category/jewelery" className="navL">Jewelery</NavLink>
            <NavLink to="/category/men's clothing" className="navL">Men's clothing</NavLink>
            <NavLink to="/category/woman's clothing" className="navL">Woman's clothing</NavLink>
        </nav>
    )
}


export default NavBar