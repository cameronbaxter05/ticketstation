import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="top__header">
      <div className="left__header__item">
        <Link to="/" className="nav__link">Tickets Station</Link>
      </div>
      <div className="middle__header__item">
         <img src="/img/tickets.svg" className="brand__logo" alt="Ticket Station" aria-label="Ticket Station" />
      </div>
      </div>
    </header>
  );
};

export default Header;
