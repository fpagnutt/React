import NavBar from './components/NavBar.js'
import CartWidget from './components/CartWidget.js'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <Link to="/" className='navL'><div className='titulo'>LEGO</div></Link>
      <Link to="/" className="navL"><img src='https://logomakercdn.truic.com/ux-flow/industry/skate-shop-meta.png' className='imgNav'></img></Link>
      <CartWidget/>
      <NavBar/>
      
      
    </header>
  )
}

export default Header