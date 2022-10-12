import React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@mui/icons-material';
const Navbar = () => {
  return (
    <header className='navbar'>
      <nav className='nav'>
        <ul className='left__nav'>
          <li className=' item item__home'>
            <Link to="/" className='nav__link'>Home</Link>
          </li>
          <li className='item item__news'>
            <Link to='/news' className='nav__link'>News</Link>
          </li>
          <li className=' item item__about'>
            <Link to='/about' className='nav__link'>Arts</Link>
          </li>
          <li className='item item__contact'>
            <Link to='/contact' className='nav__link'>Theatre & Comedy</Link>
          </li>

          <li className='item item__about'>
            <Link to='/about' className='nav__link'>About</Link>
          </li>
          <li className='item item__contact'>
            <Link to='/contact' className='nav__link'>Contact</Link>
          </li>
        </ul>
        <ul className='right__nav'>
          <li className='item item__signin'>
            <AccountCircleRoundedIcon color={'white'} size={35} />
            <Link to='/signin' className='nav__link'>
                Signin</Link>
          </li>
          <span>/</span>
          <li className='item item__register'>
            <Link to='/register' className='nav__link'>Register</Link>
          </li>

        <li className="item items__menu">
          <MenuOutlined size={45} color={'white'} />
        </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;