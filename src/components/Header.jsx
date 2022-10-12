import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='header'>
      <div className="left__header__item">
        <h2 className='brand__name'>Tickets Station</h2>
      </div>
      <nav className="right__header__item">
        <ul className='items'>
          <li className='item item__help'>
            <Link to='/help_faq' className='nav__link'>Help/FAQ</Link>
          </li>
          <li className='item item__git_card'>
             <Link to='/gift_cards' className='nav__link'>Gift Cards</Link>
            </li>
          <li className='item item__sell_tickets'>
             <Link to='/sell_tickets' className='nav__link'>Sell Tickets</Link>
            </li>
          <li className='item item_tickets_your_event'>
            <Link to="/" className='nav__link'>Ticket your event</Link>
          </li>
          <li className='item item__vip'>
             <Link to="/vip" className='nav__link'>VIP</Link>
            </li>
        </ul>
          <figure className=''>
              <img src="/img/amex_small_uk.png" alt="Tickets Station" className="brand__logo" />
          </figure>
       </nav>
    </header>
  )
}

export default Header