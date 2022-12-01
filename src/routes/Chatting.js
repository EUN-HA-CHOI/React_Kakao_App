import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Chatting.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlane,faWifi,faMoon,faBatteryFull,faMagnifyingGlass,faBars,faAngleLeft,faPlus,faFaceSmile,faMicrophone } from "@fortawesome/free-solid-svg-icons";
import {faBluetoothB} from "@fortawesome/free-brands-svg-icons"


function Chatting({userObj}) {
  const location = useLocation();
  const { name, img } = location.state;
  
  return (
    <>
    <body className='chatting_body'>
     <header className='chatting_hea'>
         <div className="status_bar">
           <div className="left_item"><FontAwesomeIcon icon={faPlane } /><FontAwesomeIcon icon={faWifi } />
           </div>
           <div className="center_item">
             <span>15</span> : <span>33</span>
           </div>
           <div className="right_item"><FontAwesomeIcon icon={faMoon} /><FontAwesomeIcon icon={faBluetoothB} /><span><span>100</span>%</span><FontAwesomeIcon icon={faBatteryFull} />
           </div>
         </div>
         <div className="title_bar chatting_title">
           <h1>Friends <span>1</span></h1>
           <div className="left_item">
             <NavLink to="/"><FontAwesomeIcon icon={faAngleLeft} /></NavLink>
           </div>
           <div className="right_item">
             <Link to="/"><FontAwesomeIcon icon={faMagnifyingGlass} /><FontAwesomeIcon icon={faBars} /></Link>
           </div>
         </div>
      </header>
    </body>
     
     
      <main className='chatting_m'>
       <span className="date_info">Monday, Octobar 17, 2022</span>
       <div className="chat_box my">
         <span className="chat">Hello!</span>
         <span className="chat">Hello! This is a test message.Hello! This is a test message</span>
         <span className="chat">This is a teat message</span>
         <span className="chat_time"><span>16</span>:<span>30</span></span>
       </div>
       <div className="chat_box other">
       <div className="other_info">
         <Link to="">
          <span className="profile_img chat_pro empty"><img src={img} alt="profile img" /></span>
         </Link>
          <span className="profile_name">Friend Name</span>
       </div>
       <span className="chat">And this is an answer</span>
       <span className="chat">And this is an answer And this is an answer</span>
       <span className="chat">And this is an answer</span>
       <span className="chat_time"><span>17</span>:<span>33</span></span>
    </div>
  </main>
  <footer> 
    <span class="plus_btn"><Link to=""><FontAwesomeIcon icon={faPlus} /></Link></span>
    <form action="/" method="post">
      <fieldset class="text_box">
        <legend class="blind">채팅 입력창</legend>
        <label for="chatting" class="blind">채팅 입력</label>
        <input type="text" id="chatting" class="text_field"/>
        <span class="emoticon_btn"><Link to=""><FontAwesomeIcon icon={faFaceSmile} /></Link></span>
        <span class="voice_btn"><Link to=""><FontAwesomeIcon icon={faMicrophone} /></Link></span>
      </fieldset>
    </form>
  </footer>
    </>
  )
}

export default Chatting