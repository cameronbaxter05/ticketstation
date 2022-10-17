import { Link } from "react-router-dom";

function Navbar({nav_item1, nav_item2, nav_item3, nav_item4}) {
  return (
    <header className="navbar">
      <nav className="nav">
        <ul className="nav__left">
          <li className="item item__home">
            <Link to="/" className="nav__link">
              {nav_item1}
            </Link>
          </li>
          <li className="item item__news">
            <Link to="/news" className="nav__link">
             {nav_item2}
            </Link>
          </li>
          <li className="item item__about">
            <Link to="/about" className="nav__link">
              {nav_item3}
            </Link>
          </li>
          <li className="item item__contact">
            <Link to="/contact" className="nav__link">
              {nav_item4}
            </Link>
          </li>
        </ul>   
        <button className="btn">
          <Link to="/buy__tickets" className="btn__link">
            Buy Ticket</Link>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
