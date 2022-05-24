import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem(props) {
  return (
    <li className="header__item">
      {props.data === "Bosh sahifa" ? <NavLink to="/" className={({isActive}) => (isActive ? "header__item-link navActive" : "header__item-link")}>
        {props.data}
      </NavLink> : <NavLink to={`/${props.data.toLowerCase()}`} className={({isActive}) => (isActive ? "header__item-link navActive" : "header__item-link")}>
        {props.data}
      </NavLink>}
    </li>
  )
}

export default NavItem
