import React from 'react';
import "./Category.scss";
import CategoryItem from './CategoryItem/CategoryItem';
import CategoryPeople from './CategoryPeople/CategoryPeople';

function Category(props) {
  let categoryArr = ["All", "Jahon adabiyoti","Diniy adabiyot", "O'zbek adabiyoti", "Biznes adabiyoti"];
  let typeArr = ["all", "jahon", "diniy", "o'zbek", "biznes"];

  return (
    <section className='category'>
      <div className="container">
        <h3 className='category__title text-center'>
          Asosiy kategoriyalar
        </h3>
        <ul className='category__list d-flex'>
          {categoryArr.map((item, index) => {
            return <CategoryItem 
              key={"d"+index}
              data={item}
              obj={props.obj}
              id={typeArr[index]}
              arr={props.arr}
              setArr={props.setArr}
            />
          })}
        </ul>
        <ul className='category__people-list d-flex flex-wrap justify-content-center'>
          {props.arr.map((item, index) => {
            return <CategoryPeople 
              data={item} 
              key={"e"+index} 
              id={item.id}
            />
          })}
        </ul>
      </div>
    </section>
  )
}

export default Category;
