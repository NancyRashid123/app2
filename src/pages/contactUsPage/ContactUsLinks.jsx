import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function () {
  return (
    <div>
        <div className='contactUs-links'>
        <Link to={''}>OverView</Link>
        <Link to={'contactsocialmedia'}>Contact Social Media</Link>
        <Link to={'contactbyform'}>Contact By Form</Link>
        <Link to={'other'}>Other</Link>
    </div>
    </div>
  )
}
