import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser,faComment,faMagnifyingGlass,faEllipsis } from "@fortawesome/free-solid-svg-icons";




function Nav() {
  return (
    <nav className="tab_bar">
      <ul>
        <li>
          <NavLink to="/" className="tab_list">
          <FontAwesomeIcon icon={faUser} className="tab_icon" />Friends
          </NavLink>
        </li>
        <li>
          <NavLink to="/chats" className="tab_list">
          <FontAwesomeIcon icon={faComment} className="tab_icon" />Chats
          </NavLink>
        </li>
        <li>
          <NavLink to="/find" className="tab_list">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="tab_icon" />Find
          </NavLink>
        </li>
        <li>
          <NavLink to="/more" className="tab_list">
          <FontAwesomeIcon icon={faEllipsis} className="tab_icon" />More
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;