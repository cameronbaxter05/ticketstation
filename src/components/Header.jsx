import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <div className="left__header__item">
        <h2 className='brand__name'>Tickets Station</h2>
      </div>
      <div className="right__header__item">
        <div className='items'>
          <div className='item__help'>
            <Link to='/help_faq' className='nav__link'>Help/FAQ</Link>
          </div>
          <div className='item__git_card'>
             <Link to='/gift_cards' className='nav__link'>Gift Cards</Link>
            </div>
          <div className='item__sell_tickets'>
             <Link to='/sell_tickets' className='nav__link'>Sell Tickets</Link>
            </div>
          <div className='item_tickets_your_event'>
            <Link to="/" className='nav__link'>Ticket your event</Link>
          </div>
          <div className='item__vip'>
             <Link to="/vip" className='nav__link'>VIP</Link>
            </div>
        </div>
          <div className=''>
              <img src="/img/amex_small_uk.png" alt="Tickets Station" className="brand__logo" />
          </div>
       </div>
    </div>
  )
}

export default Header