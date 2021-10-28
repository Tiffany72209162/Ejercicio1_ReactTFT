import React from 'react'
import { Link } from "react-router-dom";
import './style.scss'

const Header = () => {
  return (
    <div className="l_header__wrapper">
      <div className="l_header__logo">
        <img src="http://www.vandalimg.com/common/1200x800/20088124952.jpg" alt="" />
      </div>
      <div className="l_header_menu">
         {/* <div>
          <p>Home</p>
        </div>
        <div>
          <p>Heros</p>
        </div>
        <div>
          <p>Otros</p>
        </div>
        <div>
          <p>Page1</p>
        </div>
        <div>
          <p>Page_2</p>
        </div> */}
        <Link to="/">Home</Link>
        <Link to="/hero">Hero</Link>
        <Link to="/otros">Otros</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
      </div>
    </div>
  )
}

export default Header
