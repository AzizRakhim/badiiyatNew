import React, { useEffect, useState } from 'react';
import Slider from '../Main/Slider/Slider';
import "./Nasr.scss";
import obj from '../../Object';
import Search from '../Main/Search/Search';
import Category from '../Main/Category/Category';
import NasrSearch from './NasrSearch/NasrSearch';
import NasrCategory from './NasrCategory/NasrCategory';

function Nasr() {
  let [arr, setArr] = useState([]);
  useEffect(() => {
    setArr(obj)
  }, []);

  return (
    <>
      <main className='nasr-main'>
        <Slider />
        <NasrSearch 
          arr={arr}
          setArr={setArr}
        />
        <div className='container'>
          <NasrCategory
            arr={arr}
            setArr={setArr}
          />
        </div>
      </main>
    </>
  )
}

export default Nasr
