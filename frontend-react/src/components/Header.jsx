import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className="navbar container pt-3 pb-3 d-flex justify-content-between align-items-center">
          <Link href="/" className="navbar-brand text-light" to="/" >Stock Prediction Portal</Link>
          <div>
            <Button text='Login' class="btn-outline-info me-5" url="/login" />
            <Button text='Register' class="btn btn-info me-5" url="/register" />
          </div>
        </nav>

    </>
  )
}

export default Header