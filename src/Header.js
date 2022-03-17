import NavBar from './components/NavBar.js'
import CartWidget from './components/CartWidget.js'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <Link to="/" className="navL"><h2>VirtualShopping</h2></Link>
      <CartWidget/>
      <NavBar/>
    </header>
  )
}

export default Header