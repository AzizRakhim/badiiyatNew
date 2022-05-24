import React from 'react';
import "../../Main/Category/Portfolio/Portfolio.scss";
import PortfolioItem from '../../Main/Category/Portfolio/PortfolioItem/PortfolioItem';
import NasrFilter from './NasrFilter/NasrFilter';

function NasrCategory(props) {
  let categoryArr = ["All", "Jahon adabiyoti", "Diniy adabiyot", "O'zbek adabiyoti", "Biznes adabiyoti"];
  let typeArr = ["all", "jahon", "diniy", "o'zbek", "biznes"];

  return (
    <section className='category'>
      <div className="container">
        <h3 className='category__title text-center'>
          Asosiy kategoriyalar
        </h3>
        <ul className='category__list d-flex'>
          {categoryArr.map((item, index) => {
            return <NasrFilter 
              key={"d"+index}
              data={item}
              obj={props.obj}
              id={typeArr[index]}
              arr={props.arr}
              setArr={props.setArr}
            />
          })}
        </ul>
        <ul className='hero__book-list d-flex flex-wrap pt-5'>
          {props.arr.map(element => {
            return element.bookObj.map((book, index) => {
              return (
                <PortfolioItem 
                  key={"erer"+index}
                  bookImg={book.bookImg}
                  bookName={book.bookName}
                  bookRating={book.bookRating}
                  id={book.bookId}
                />
              )
              }
            )}
          )};
        </ul> 
      </div>
    </section>
  )
}

export default NasrCategory
