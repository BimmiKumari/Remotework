import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import Image from '../assets/logo.png'
import { FaLongArrowAltRight } from "react-icons/fa";


const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 className='loGo'>NovaLink <img src={Image} alt='not loaded' width='50px'  /> </h1>
        </Link>
        <nav >
          {user && (
            <div>
               <Link to="/">Home</Link>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
              <Link to="/email">Email us</Link>
              <Link to="/profile">profile</Link>
              
            </div>
          )}
          {!user && (
            <div style={{display:'flex',flexDirection:'row'}}>
              <Link to="/login"> <button className="navpoint">LogIn</button></Link>
              <Link to="/signup"><button className="signupp">SignUp<FaLongArrowAltRight /></button></Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar