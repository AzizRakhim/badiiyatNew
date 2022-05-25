import React from 'react';
import "./Search.scss";
import obj from '../../../Object';

function Search(props) {
  let temp = [];
  const searchHandler = (e) => {
    obj.forEach((item) => {
      if(item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
        temp.push(item);
      } else if(item.lastName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
        temp.push(item);
      }
    });
    props.setArr(temp);
  }
  return (
    <section className='search'>
      <div className='search__container'>
        <h3 className='search__title text-center'>
          Qidirish
        </h3>
        <form className='search__form d-flex align-items-center'>
          <input type="text" className='search__input main-input' name='search' required placeholder='Adiblar, kitoblar, audiolar, maqolalar...' onChange={searchHandler} />
          <button className='search__btn d-flex align-items-center'>
            <i class='bx bx-search-alt'></i>
            Izlash
          </button>
        </form>
      </div>
    </section>
  )
}

export default Search
