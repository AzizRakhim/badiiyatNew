import React from 'react';
import { Link } from 'react-router-dom';
import "./CategoryPeople.scss";

function CategoryPeople(props) {
  return (
    <li className='category__people-item col-2'>
      <Link 
        to={`/portfolio/${props.id}`} className="category__link-tdn"
      >
        <div className='category__border'>
          <div className='category__img-box'>
            <img src={props.data.img} alt="person" />
          </div>
          <div className='category__info'>
            <h4 className='category__name'>
              {props.data.name} {props.data.lastName}
            </h4>
            <span className='category__date'>
              {props.data.born}-{props.data.died}
            </span>
            <div className='category__num-box d-flex justify-content-center'>
              <div className='category__books d-flex align-items-center'>
                <i class='bx bxs-book-alt'></i>
                {props.data.books}
              </div>
              <div className='category__audio d-flex align-items-center'>
                <i class='bx bx-headphone'></i>
                {props.data.audio}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default CategoryPeople
