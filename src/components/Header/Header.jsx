import React, { useState } from 'react';
import "./Header.scss";
import userLogo from "../../assets/images/user-avatar.png";
import NavItem from './NavItem/NavItem';
import { Link } from 'react-router-dom';

function Header() {
  let navArr = ["Bosh sahifa", "Nasr", "Nazm", "Maqolalar", "Forum"];

  let [check, setCheck] = useState(false);

  const userHandler = () => {
    setCheck(!check);
  }

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
            <div className='user-wrapper position-relative'>
              <div className='header__btns d-flex align-items-center' onClick={userHandler}>
                <button className='header__user-btn'>
                  <img src={userLogo} alt="user" />
                </button>
                <button className='header__arrow-btn d-flex align-items-center'>
                  <i class='bx bx-chevron-down'></i>
                </button>
              </div>
              <div className='userModal' style={{display : check ? "block" : "none"}}>
                <ul className='user-list'>
                  <Link
                    to={"/profile"}
                    className={"tdn-none"}
                  >
                    <li className="user-item d-flex align-items-center">
                      <i class='bx bx-user-circle'></i>
                      Profile
                    </li>
                  </Link>
                  <Link
                    to={"/setting"}
                    className={"tdn-none"}
                  >
                    <li className="user-item d-flex align-items-center">
                      <i class='bx bxs-cog'></i>
                      Setting
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
