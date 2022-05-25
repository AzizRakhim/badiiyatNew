import React from 'react';
import "./Profile.scss";
import Header from '../Header/Header'
import PortfolioItem from '../Main/Category/Portfolio/PortfolioItem/PortfolioItem';

function Profile(props) {
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
                {props.name} {props.lastName}
              </h3>
              <div className='profile__date'>
                Telefoni: 
                <span className='profile__num'>
                  {props.phone}
                </span> 
              </div>
              <div className='profile__date'>
                Emaili: 
                <span className='profile__num'>
                  {props.email}
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
              Bu yerda sizning reklamangiz bo'lishi mumkin edi
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
              <ul className='save__product-list'>
                {props.saved.map((item, index) => {
                  return <PortfolioItem 
                    key={"asdtf"+index}
                    bookImg={item[0].bookImg}
                    bookName={item[0].bookName}
                    bookRating={item[0].bookRating}
                    till={index}
                    id={item[0].bookId}
                  />
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
