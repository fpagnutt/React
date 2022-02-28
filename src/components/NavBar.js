import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <header>
            <p>eCOMMERCE</p>
            <CartWidget/>
            <nav id="nav-prop">
                <a href="#">SECCION 1</a>
                <a href="#">SECCION 2</a>
                <a href="#">SECCION 3</a>
            </nav>
        </header>
    )
}


export default NavBar