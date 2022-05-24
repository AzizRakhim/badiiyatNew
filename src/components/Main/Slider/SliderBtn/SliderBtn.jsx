import React from 'react';
import "./SliderBtn.scss";

function SliderBtn(props) {
  const sliderHandler = () => {
    props.setCount(props.id);
  }

  return (
    <li className="slider__item" onClick={sliderHandler}>
      <button className="slider__btn"></button>
    </li>
  )
}

export default SliderBtn
