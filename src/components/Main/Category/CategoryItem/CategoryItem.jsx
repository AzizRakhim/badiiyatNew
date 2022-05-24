import React from 'react';
import "./CategoryItem.scss";
import obj from '../../../../Object';

function CategoryItem(props) {

  const typeHandler = (e) => {
    if(e.target.id.toLowerCase() === "all"){
      props.setArr(obj.map(item => {
        return item;
      }))
    } else if(e.target.id.toLowerCase() === "jadid"){
      props.setArr(obj.filter(item => {
        return item.genre.toLowerCase() === e.target.id.toLowerCase();
      }))
    } else if(e.target.id.toLowerCase() === "jahon"){
      props.setArr(obj.filter(item => {
        return item.genre.toLowerCase() === e.target.id.toLowerCase();
      }))
    } else if(e.target.id.toLowerCase() === "diniy"){
      props.setArr(obj.filter(item => {
        return item.genre.toLowerCase() === e.target.id.toLowerCase();
      }))
    } else if(e.target.id.toLowerCase() === "biznes"){
      props.setArr(obj.filter(item => {
        return item.genre.toLowerCase() === e.target.id.toLowerCase();
      }))
    } else if(e.target.id.toLowerCase() === "o'zbek"){
      props.setArr(obj.filter(item => {
        return item.genre.toLowerCase() === e.target.id.toLowerCase();
      }))
    } 
  }

  return (
    <li className='category__item'>
      <button className='category__btn' onClick={typeHandler} id={props.id}>
        {props.data}
      </button>
    </li>
  )
}

export default CategoryItem
