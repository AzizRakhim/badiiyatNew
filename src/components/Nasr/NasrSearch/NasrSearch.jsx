import React from 'react';
import "../../Main/Search/Search.scss";
import obj from '../../../Object';

function NasrSearch(props) {
  let smth = obj;
  let temp = [];
  let two = [];
  let searchHandler = (e) => {
    if(e.keyCode !== 8){
      obj.forEach((item, i) => {
        item.bookObj.map((el, idx) => {
          if(el.bookName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
            temp.push(item);
          }
        })
        props.setArr(temp);
      })
    } else {
      props.setArr(obj.map(item => {
        return item;
      }))
    }  
  }


 
  return (
    <section className='search'>
      <div className='search__container'>
        <h3 className='search__title text-center'>
          Qidirish
        </h3>
        <form className='search__form d-flex align-items-center'>
          <input type="text" className='search__input' name='search' required placeholder='Adiblar, kitoblar, audiolar, maqolalar...' onKeyUp={searchHandler} />
          <button className='search__btn d-flex align-items-center'>
            <i class='bx bx-search-alt'></i>
            Izlash
          </button>
        </form>
      </div>
    </section>
  )
}

export default NasrSearch
