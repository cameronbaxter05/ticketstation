import React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav'>
        <div className='left__nav'>
          <div className='item__home'>
            <Link to="/" className='nav__link'>Home</Link>
          </div>
          <div className='item__news'>
            <Link to='/news' className='nav__link'>News</Link>
          </div>
          <div className='item__about'>
            <Link to='/about' className='nav__link'>Arts</Link>
          </div>
          <div className='item__contact'>
            <Link to='/contact' className='nav__link'>Theatre & Comedy</Link>
          </div>

          <div className='item__about'>
            <Link to='/about' className='nav__link'>About</Link>
          </div>
          <div className='item__contact'>
            <Link to='/contact' className='nav__link'>Contact</Link>
          </div>
        </div>
        <div className='right__nav'>
          <div className='item__signin'>
            <AccountCircleRoundedIcon color={'white'} size={35} />
            <Link to='/signin' className='nav__link'>
                Signin</Link>
          </div>
          <span>/</span>
          <div className='item__register'>
            <Link to='/register' className='nav__link'>Register</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;