import React from 'react';
import "./Header.scss";
import userLogo from "../../assets/images/user-profile.png";
import NavItem from './NavItem/NavItem';
import { Link } from 'react-router-dom';

function Header() {
  let navArr = ["Bosh sahifa", "Nasr", "Nazm", "Maqolalar", "Forum"];

  return (
    <header className='header site-header'>
      <div className="container">
        <div className='d-flex align-items-center'>
          <div className='header__logo-box'>
            <Link to="/" className='header__logo-link'>
              badiiyat
            </Link>
          </div>
          <div className='header__space d-flex align-items-center'>
            <nav className='header__nav'>
              <ul className='header__list d-flex align-items-center'>
                {navArr.map((item, index) => {
                  return <NavItem data={item} key={"a"+index} />
                })}
              </ul>
            </nav>
            <div className='header__btns d-flex align-items-center'>
              <button className='header__user-btn'>
                <img src={userLogo} alt="user" />
              </button>
              <button className='header__arrow-btn d-flex align-items-center'>
                <i class='bx bx-chevron-down'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
