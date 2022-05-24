import React, { useState } from 'react';
import "./Slider.scss";
import bigStar from "../../../assets/images/big-star.svg";
import middleStar from "../../../assets/images/middle-star.svg";
import smallStar from "../../../assets/images/small-star.svg";
import grandpa from "../../../assets/images/grandpa.png";
import behbudiy from "../../../assets/images/behbudiy.jpg";
import cholpon from "../../../assets/images/cholpon.jpg";
import ozod from "../../../assets/images/ozod-sharafiddinov.jpg";
import SliderBtn from './SliderBtn/SliderBtn';
import Titles from './Titles/Titles';
import SliderImg from './SliderImg/SliderImg';

let titleArr = ["Temuriylar davri adabiyoti", "Jadid adabiyoti", "Sovet davri adabiyoti", "Mustaqillik davri adabiyoti"];

let imgArr = [grandpa, behbudiy, cholpon, ozod]

function Slider() {
  let [count, setCount] = useState(0);

  return (
    <section className='slider'>
      <div className="container">
        <div className='slider__container'>
          <div className='slider__slider-container'>
            <ul className='slider__title-list d-flex' style={{transform : `translateX(-${count * 337}px)`}}>
              {titleArr.map((item, index) => {
                return <Titles 
                  key={"c"+index} 
                  data={item}
                />
              })}
            </ul>
          </div>
          <ul className='slider__btns d-flex'>
            {Array(4).fill(0).map((_, index) => {
              return <SliderBtn 
                key={"b"+index}
                setCount={setCount}
                id={index}
              />
            })}
          </ul>
          <img className='big-star' src={bigStar} alt="star" />
          <img className='middle-star' src={middleStar} alt="star" />
          <img className='small-star' src={smallStar} alt="star" />
          <div className='slider__grey'>
            <ul className='s-list d-flex' style={{transform : `translateX(-${count * 399}px)`}}>
              {imgArr.map((item, index) => {
                return <SliderImg 
                  item={item} 
                  key={"f"+index}
                />
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
