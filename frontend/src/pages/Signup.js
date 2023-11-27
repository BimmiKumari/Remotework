import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { toast } from 'react-hot-toast';

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
    <div>
     
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <label>Enter Name:</label>
      <input 
        type="name" 
        onChange={(e) => setName(e.target.value)} 
        value={name} 
      />
       
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      

      
      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  )
}

export default Signup