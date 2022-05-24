import React from 'react';

function SliderImg(props) {
  return (
    <li className='s-item col-12 position-relative'>
      <div className='slider__gray'></div>
      <img src={props.item} alt="grandpa" />
    </li>
  )
}

export default SliderImg
