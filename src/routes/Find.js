import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Nav from '../components/Nav';
import '../styles/Find.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlane,faWifi,faMoon,faBatteryFull,faAddressBook,faQrcode,faMobileScreenButton,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faBluetoothB} from "@fortawesome/free-brands-svg-icons"



function Find({userObj}) {
  return (
    <>
    <body className='find_b'>
    <header className='find_h'>
        <div className="status_bar">
          <div className="left_item"><FontAwesomeIcon icon={faPlane } /><FontAwesomeIcon icon={faWifi } />
          </div>
          <div className="center_item">
            <span>15</span> : <span>33</span>
          </div>
          <div className="right_item"><FontAwesomeIcon icon={faMoon} /><FontAwesomeIcon icon={faBluetoothB} /><span><span>100</span>%</span><FontAwesomeIcon icon={faBatteryFull} />
          </div>
        </div>
        <div className="title_bar">
          <h1>Find</h1>
          <div className="left_item">
            <NavLink to="/">Edit</NavLink>
          </div>
          <div className="right_item"></div>
        </div>
      </header>
    </body>
    
    <main className='find_m'>
    <ul className="find_method">
      <li>
        <Link to=""><FontAwesomeIcon icon={faAddressBook} />Find</Link>
      </li>
      <li>
        <Link to=""><FontAwesomeIcon icon={faQrcode} />QR Code</Link>
      </li>
      <li>
        <Link to=""><FontAwesomeIcon icon={faMobileScreenButton} />Shake</Link>
      </li>
      <li>
        <Link to=""><FontAwesomeIcon icon={faEnvelope} />Invite via SNS</Link>
      </li>
    </ul>
    <section className="recommend_section">
      <header><h2>Recommend Friend</h2></header>
      <ul>
        <li>You Have No Recommend Friends.</li>
      </ul>
    </section>
  </main>
  <Nav />
    </>
  )
}

export default Find