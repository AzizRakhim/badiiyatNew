import React from 'react';
import { Link } from 'react-router-dom';
import "../Portfolio.scss";

function PortfolioItem(props) {
  return (
    <li className='hero__book-item'>
      <Link          
        to={`/book/${props.id}`} className="category__link-tdn"  
      >
        <div className='hero__book-border'>
          <div className='hero__book-img-box'>
            <img src={props.bookImg} alt="book" />
          </div>
          <h3 className='hero__book-item-name'>
            {props.bookName}
          </h3>
          <div className='hero__book-rating d-flex align-items-center'>
            <i class='bx bxs-star'></i>
            {props.bookRating} • 3400 ta fikrlar
          </div>
        </div>
      </Link>
    </li>
  )
}

export default PortfolioItem
