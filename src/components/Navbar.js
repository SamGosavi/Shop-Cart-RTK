
import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom'

function Navbar() {
  
  const items = useSelector((state)=>state.cart)

  return (
    <div className='nav'>
      <span className='logo'>SHOPPERS</span>
      <div className='links'>
        <Link className='navLink' to='/'>Home</Link>
        <Link className='navLink' to='/cart'>Cart</Link>
        <span style={{marginRight:'10px',fontWeight:'600'}} className="cartCount">Cart Items : {items.length} </span>
      </div>
    </div>
  )
}

export default Navbar
