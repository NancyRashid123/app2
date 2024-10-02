import React from 'react'
import ContactUsLinks from './ContactUsLinks'
import ContactSections from './ContactSections'

export default function ContactUs() {
  return (
    <div className='contactUs-page'>
      <div className="contactUs-container">
        <ContactUsLinks/>
        <ContactSections/>
      </div>
    </div>
  )
}
