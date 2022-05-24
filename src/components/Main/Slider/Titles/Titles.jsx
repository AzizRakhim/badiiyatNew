import React from 'react'

function Titles(props) {
  return (
    <li className='slider__title-item'>
      <h2 className='slider__title'>
        {props.data}
      </h2>
    </li>
  )
}

export default Titles
