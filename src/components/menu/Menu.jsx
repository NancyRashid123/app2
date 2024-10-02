import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/service'}>Service</NavLink>
        </li>
        <li>
          <NavLink to={'/contactus'}>Contact Us</NavLink>
        </li>
      </ul>
    </div>
  )
}
