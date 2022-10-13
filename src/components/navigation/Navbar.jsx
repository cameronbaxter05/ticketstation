import React from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav">
        <ul className="nav__left">
          <li className="item item__logo">
            <img src="https://ticket4football.com/img/logo.png" alt="ticket station" />
          </li>
          <li className="item item__home">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="item item__news">
            <Link to="/news" className="nav__link">
              Premier League
            </Link>
          </li>
          <li className="item item__about">
            <Link to="/about" className="nav__link">
              La Liga
            </Link>
          </li>
          <li className="item item__contact">
            <Link to="/contact" className="nav__link">
              Italian Serie
            </Link>
          </li>
          <li className="item item__about">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li className="item item__contact">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul> 
        <div className="nav__right">
          <ul className="item__register">
            <li className="item">
              <AccountCircleRoundedIcon size={45} color={"black"} />
              <Link to="/register" className="nav__link">
                Login
              </Link>
            </li>
            <Link to="/register" className="create__account">
              create new account now!
            </Link>
          </ul>
        </div>
       <div className="menu_toggle">
          <MenuIcon className="menu__icon" size={50} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
