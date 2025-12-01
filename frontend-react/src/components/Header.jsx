import React, { useContext } from 'react'
import Button from './Button'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Header = () => {
  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext)
  const navigate=useNavigate();




  const handleLogout=()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    console.log('Logged Out')
    navigate('/login')
  }
  return (
    <>
        <nav className="navbar container pt-3 pb-3 d-flex justify-content-between align-items-center">
          <Link href="/" className="navbar-brand text-light" to="/" >Stock Prediction Portal</Link>
          <div>
            {isLoggedIn ? (
              <button className='btn btn-outline-danger' onClick={handleLogout}>LogOut</button>
            ):(
              <>
                <Button text='Login' class="btn-outline-info me-5" url="/login" />
                <Button text='Register' class="btn btn-info me-5" url="/register" />
              </>
            )}
            
          </div>
        </nav>

    </>
  )
}

export default Header