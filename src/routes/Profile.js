import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import profileImage from '../data/profileImg.json';
import '../styles/Profile.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlane,faWifi,faMoon,faBatteryFull,faXmark,faUser,faComment,faPencil } from "@fortawesome/free-solid-svg-icons";
import {faBluetoothB} from "@fortawesome/free-brands-svg-icons"
//import backgroundImg from '../data/backgroundImg.json';

function Profile({userObj}) {
  //const friendImg = backgroundImg[0].imges;
  const myProfile = profileImage[0].image;
  return (
    <>
    <body>
    <header>
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
          <h1 className="blind">Profile</h1>
          <div className="left_item"><NavLink to="/"><FontAwesomeIcon icon={ faXmark} /></NavLink></div>
          <div className="right_item"><NavLink to="/"><FontAwesomeIcon icon={faUser} /></NavLink></div>
        </div>
      </header>

    </body>
    
      <main>
        <section className="background">
          <h2 className="blind">My Profile background</h2>
          {/*<div style={{backgroundImage:'url($ {MyBackgroundImage})',
                        backgroundSize:'cover',
                        backgroundRepeat:'no-reapeat',
                        backgroundPosition:'center',
                        height:'500px',
                        }}
                        >
                      </div>*/}
        </section>
        <section className="profile">
          <h2 className="blind">My profile info</h2>
          <div className="profile_img prof_prof empty">
          <img src={myProfile} alt="profile images" />
          </div>
          <div className="profile_cont">
            <span className="profile_name">My Name</span>
            <input type="mail" class="profile_email" placeholder="UserID@email.com" />
            <ul className="profile_menu">
              <li><Link to=""><span className="icon"><FontAwesomeIcon icon={ faComment} /></span>My Chatroom</Link></li>
              <li><Link to=""><span className="icon"><FontAwesomeIcon icon={ faPencil} /></span>Edit Profile</Link></li>
            </ul>
          </div>
        </section>
     </main>
    </>
  )
}

export default Profile;