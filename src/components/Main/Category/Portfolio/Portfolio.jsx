import React from 'react';
import "./Portfolio.scss";
import { useLocation } from 'react-router-dom';
import obj from '../../../../Object';
import PortfolioItem from './PortfolioItem/PortfolioItem';

function Portfolio() {
  let location = useLocation();
  return (
    <>
      {obj.map((item) => {
        if(item.id === location.pathname.split("/").at(-1)){
          return (
            <div className="hero d-flex">
              <div className='hero__img-container col-6'>
                <div className='hero__img-box'>
                  <img src={item.img} alt="person" />
                </div>
                <div className='hero__img-desc d-flex align-items-center justify-content-between'>
                  <div className='hero__born'>
                    <span className='hero__born-span'>
                      Tavallud sanasi
                    </span>
                    <div className='hero__born-date'>
                      {item.bornDate}-{item.bornMonth} {item.born}
                    </div>
                    <p className='hero__location'>
                      {item.location}
                    </p>
                  </div>
                  <div className='hero__hyphen'>
                    -
                  </div>
                  <div className='hero__born'>
                    <span className='hero__born-span'>
                      Tavallud sanasi
                    </span>
                    <div className='hero__born-date'>
                      {item.diedDate} {item.diedMonth} {item.died}
                    </div>
                    <p className='hero__location'>
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
              <div className='hero__info col-6'>
                <h2 className='hero__title'>
                  {item.name} {item.lastName}
                </h2>
                <p className='hero__desc'>
                  {item.desc}
                </p>
                <div className='hero__genre'>
                  <i class='bx bxs-bookmark'></i>
                  <span className='hero__genre-title'>
                    Ijodi
                  </span>
                  <p className='hero__genre-text'>
                    {item.jobs}
                  </p>
                </div>
                <div className='hero__books d-flex align-items-center justify-content-between'>
                  <h2 className='hero__book-title'>
                    Asarlari
                  </h2>
                  <button className='hero__book-btn'>
                    Barchasini ko’rish
                  </button>
                </div>
                <ul className='hero__book-list d-flex'>
                  {item.bookObj.map((book, index) => {
                    return <PortfolioItem 
                      key={"asdf"+index}
                      bookImg={book.bookImg}
                      bookName={book.bookName}
                      bookRating={book.bookRating}
                      till={index}
                      id={book.bookId}
                    />
                  })}
                </ul>   
              </div>
            </div>
          )
          
        }
        })
      }
    </>
  )
}

export default Portfolio