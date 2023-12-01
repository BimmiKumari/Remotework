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
        <nav style={{color:'white'}} >
          {user && (
            <div style={{color:'white',columnGap:'40px'}}>
              <Link to="/" style={{color:'white',margin:'10px'}}>Home</Link>
              <Link to='/record' style={{color:'white',margin:'10px'}}>Recorder</Link>
              <Link to="/email" style={{color:'white',margin:'10px'}}>Help Center</Link>
              <Link to="/event"  style={{color:'white',margin:'10px'}}>SharedCalender</Link>
              <Link to="/profile" style={{color:'white' ,margin:'10px'}}>profile</Link>
              <Link to="/tra" style={{color:'white' ,margin:'10px'}}>Tralink</Link>

              <a href='https://novalinktaskmanager.netlify.app/'style={{color:'white',margin:'10px'}}>Task Manager</a>
             <button style={{color:'#02042a'}}> <a href='https://novalinkmeetingroom.netlify.app/' >Meeting Room</a></button>
              <button onClick={handleClick}>Log out</button>
              
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