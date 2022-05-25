import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./NasrBook.scss";
import obj from '../../../../Object';
import PortfolioItem from '../../../Main/Category/Portfolio/PortfolioItem/PortfolioItem';
import Header from '../../../Header/Header';

function NasrBook(props) {
  let location = useLocation();
  let [arr, setArr] = useState(obj);

  let bookHandler = (elId) => {
    let temp = [];
    arr.map((item, index) => {
      return item.bookObj.map((el, idx) => {
        if(el.bookId === elId){
          temp.push(el);
          return el;
        }
      })
    })
    props.setSaved([...props.saved, temp]);
    console.log(props.saved);
  }

  return (
    <>
      <Header />
      {arr.map(element => {
        return element.bookObj.map((el, idx) => {
          if(el.bookId === location.pathname.split("/").at(-1)){
            return (
              <div className='whole-wrapper'>
                <div className='nasrbook d-flex container'>
                  <div className='nasrbook__left col-6'>
                    <img src={el.bookImg} alt="book" />
                  </div>
                  <div className='nasrbook__right col-6'>  
                    <h2 className='nasrbook__title'>
                      {el.bookName}
                    </h2>
                    <Link 
                      to={`/portfolio/${element.id}`} className="category__link-tdn">
                      <div className='nasrbook__rating-box d-flex align-items-center'>
                        {element.name} {element.lastName} <span className='nasrbook__border'>
                          |
                        </span>
                        <i class='bx bxs-star'></i>
                        <span className='nasrbook__rating'>
                          {el.bookRating}
                        </span>
                      </div>
                    </Link>
                    <div className='nasrbook__page'>
                      Sahifalar soni:
                      <span className='nasrbook__page-num'>
                        {el.bookPage}
                      </span>
                    </div>
                    <div className='nasrbook__page'>
                    Chop etilgan:
                      <span className='nasrbook__page-num'>
                        {el.published}
                      </span>
                    </div>
                    <div className='nasrbook__page'>
                      Janri:
                      <span className='nasrbook__page-num'>
                        {el.bookSenario}
                      </span>
                    </div>
                    <div className='nasrbook__page bottom'>
                      Nashriyot
                      <span className='nasrbook__page-num'>
                        {el.nashriyot}
                      </span>
                    </div>
                    <div className='nasrbook__data d-flex align-items-center'>
                      To’liq ma’lumot
                      <i class='bx bx-down-arrow-alt'></i>
                    </div>
                    <div className='nasrbook__info'>
                      {el.bookInfo}
                      <br />
                      <br />
                      {el.bookInfoTwo}
                    </div>
                    <div className='nasrbook__format'>
                      Mavjud formatlar
                    </div>
                    <div className='nasrbook__btn-wrapper d-flex align-items-center'>
                      <ul className='nasrbook__list d-flex col-6'>
                        <li className='nasrbook__item col-4'>
                          <i class='bx bxs-book-alt'></i>
                          Qog’oz kitob
                          <span className='nasrbook__price'>
                            {el.bookPrice}
                          </span>   
                        </li>
                        <li className='nasrbook__item col-4'>
                        <i class='bx bx-headphone' ></i>
                          Audiokitob
                          <span className='nasrbook__price'>
                            {el.audioTime}
                          </span>   
                        </li>
                        <li className='nasrbook__item col-4'>
                          <i class='bx bx-laptop'></i>
                          Elektron
                          <span className='nasrbook__price'>
                            {el.electron}
                          </span>   
                        </li>
                      </ul>
                      <div className='nasrbook__btn-holder'>
                        <button className='nasrbook__btn'onClick={() => bookHandler(el.bookId)}>
                          Javonga qo’shish 
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='container'>
                  <ul className='nasrbook__comment-list'>
                    <li className="nasrbook__comment-item">
                      <button className="nasrbook__comment-btn">
                        Muallif haqida  
                      </button>
                    </li>
                    <li className="nasrbook__comment-item">
                      <button className="nasrbook__comment-btn active">
                        Kitobdan iqtiboslar 
                      </button>
                    </li>
                    <li className="nasrbook__comment-item">
                      <button className="nasrbook__comment-btn">
                        Kitobxonlar taqrizi 
                      </button>
                    </li>
                  </ul>
                  <ul className='nasrbook__remark-list d-flex align-items-center'>
                    <li className="nasrbook__remark-item col-6">
                      <span className='quotation'>“</span>
                      <div className='nasrbook__remark-border'>
                        Inson bolasi ne kunlarni ko‘rmaydi?!
                        Har bir odam o‘z g‘ami bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi?
                        Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
                      </div>
                      <div className='nasrbook__remark-btns d-flex align-items-center'>
                        <button className='nasrbook__remark-btn'>
                          <i class='bx bxs-heart'></i>
                        </button>
                        <button className='nasrbook__remark-btn'>
                          <i class='bx bx-share-alt'></i>
                        </button>
                      </div>
                    </li>
                    <li className="nasrbook__remark-item col-6">
                      <span className='quotation'>“</span>
                      <div className='nasrbook__remark-border'>
                        Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra, tuproq tagida yotganlar ko‘p. Yer qatlami odam suyaklariga to‘lib ketgan.
                      </div>
                      <div className='nasrbook__remark-btns d-flex align-items-center'>
                        <button className='nasrbook__remark-btn'>
                          <i class='bx bxs-heart'></i>
                        </button>
                        <button className='nasrbook__remark-btn'>
                          <i class='bx bx-share-alt'></i>
                        </button>
                      </div>
                    </li>
                  </ul>
                  <div className='nasrbook__more-box d-flex align-items-center justify-content-between'>
                    <div className='nasrbook__suggestion'>
                      Sizga yoqishi mumkin
                    </div>
                    <button className='nasrbook__more-btn'>
                      Barchasini ko’rish
                    </button>
                  </div>
                  <ul className='nasrbook__list-people'>
                    {arr.map((thing, i) => {
                      if(i < 2){
                        return thing.bookObj.map((book, index) => {
                          return <PortfolioItem 
                            key={"asdfff"+index}
                            bookImg={book.bookImg}
                            bookName={book.bookName}
                            bookRating={book.bookRating}
                            till={index}
                            id={book.bookId}
                          />
                        })}
                      }
                    )}
                  </ul>
                </div>
              </div>
            )
          }
        })
      })}
    </>
  )
}

export default NasrBook
