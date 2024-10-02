import React from 'react'
import { FaFacebook } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
export default function ContactSocialMedia() {
  return (
    <div>
      <h3>Contact Social Media</h3>
      <div className="social-media-icon">
      <FaFacebook />
      <FaTwitter />
      <FaInstagram />
      </div>
    </div>
  )
}
