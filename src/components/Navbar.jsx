import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import Logo from '../images/logo.png';
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md';
import {links} from '../data';
import { useState } from 'react';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='logo'>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {
            links.map( (item, index) => {
              return (
                <li key = {index} >
                  <NavLink className={({isActive}) => isActive ? 'active-nav' : ''} to = {item.path}>{item.name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className='nav__toggle-btn' onClick={
          () => setIsNavShowing(!isNavShowing)
          }>
            {
              isNavShowing ? <MdOutlineClose />
              : <GoThreeBars />
            }
        </button>
      </div>
    </nav>
  )
}

export default Navbar