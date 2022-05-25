import React from 'react';
import "./Profile.scss";
import Header from '../Header/Header'

function Profile() {
  return (
    <>
      <Header />
      <div className='profile'>
        <div className='container'>
          <div className='profile__wrapper d-flex'>
            <div className='profile__img-box'>
              <div className='profile__img-holder'>
                <img src="https://imgur.com/VPYqJFV.png" alt="user" />
                <div className='profile__star-box'>
                  <i class='bx bxs-star' ></i>
                </div>
              </div>
              <div className='profile__entry'>
                Oltin kitobxon
              </div>
              <div className='profile__books'>
                186 ta kitob o’qigan
              </div>
            </div>
            <div className='profile__info'>
              <h3 className='profile__name'>
                Farruxbek Abdullayev
              </h3>
              <div className='profile__date'>
                Tavallud: 
                <span className='profile__num'>
                  February 08, 1999
                </span> 
              </div>
              <div className='profile__date'>
                Manzili: 
                <span className='profile__num'>
                  Jizzax
                </span> 
              </div>
              <div className='profile__date'>
                Bio: 
                <span className='profile__num'>
                  Graphic designer and Developer
                </span> 
              </div>
            </div>
          </div>
          <div className='profile__save save d-flex'>
            <div className='save__left col-3'>

            </div>
            <div className='save__right col-9'>
              <ul className='save__list d-flex justify-content-center'>
                <li className="save__item">
                  <button className='save__btn active'>
                    Save
                  </button>
                </li>
                <li className="save__item">
                  <button className='save__btn'>
                    O’qishni xohlayman
                  </button>
                </li>
                <li className="save__item">
                  <button className='save__btn'>
                    O’qilmoqda
                  </button>
                </li>
                <li className="save__item">
                  <button className='save__btn'>
                    Adiblar
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
