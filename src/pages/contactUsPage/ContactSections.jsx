import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ContactSections() {
  return (
    <div className='contact-section'> <Outlet/> </div>
  )
}
