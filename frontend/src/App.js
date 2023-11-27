import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { Toaster } from 'react-hot-toast';
import Profile from './components/Profilee';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Emailsend from './components/Emailsend'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/profile" />} 
            />
             <Route 
              path="/email" 
              element={user ? <Emailsend/> : <Navigate to="/login" />} 
            />
            <Route 
              path="/profile" 
              element={user ? <Profile/> : <Navigate to="/login" />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;