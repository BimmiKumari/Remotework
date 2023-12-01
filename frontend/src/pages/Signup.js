import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { toast } from 'react-hot-toast';
import Image from '../assets/signup.png'
  const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
   await signup( name, email, password);
   toast.success('Welcome to Novalink' ,{
    duration: 5000,});
    
  }

  return (
    <div style={{display:'flex',flexDirection:'row',columnGap:'40px',justifyContent:'center',alignItems:'center'}}>
     <div>
    <form className="signup" onSubmit={handleSubmit}>
      <h5 className='bright-glowing-text'>Speak,Listen and Collaborate</h5>
      <label>Enter Name:</label>
      <input 
        type="name" 
        onChange={(e) => setName(e.target.value)} 
        value={name} 
        style={{borderRadius:'25px'}}
      />
       
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        style={{borderRadius:'25px'}}
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        style={{borderRadius:'25px'}}
      />
      

      
      <button style={{borderRadius:'10px'}} disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
    <div className="sign">
      <img style={{borderRadius:'50%'}} src={Image} alt='signup bg' width='400px' height='400px'/>
    </div>
    </div>
  )
}

export default Signup