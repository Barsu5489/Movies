import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import './footer.css'
function Footer() {
  return (
<div className="footer">
  <div className="icon-links">
      <FaFacebookSquare className="icon"/>
      <FiInstagram className="icon"/>
      <FaTwitter className="icon"/>
      <FaYoutube className="icon"/>
  </div>
  <div className="some-links">
      <Link href={`/`}>
          <span className="link">Conditions of Use</span>
      </Link>
      <Link href={`/`}>
          <span className="link">Privacy & Policy</span>
      </Link>
      <Link href={`/`}>
          <span className="link">Press Room</span>
      </Link>
  </div>
  <p className="copyrights">©2021 MovieBox by Adriana Eka Prayudha</p>
</div>

  )
}

export default Footer