import React from 'react';
import { Link,useNavigate} from 'react-router-dom';
import Nav from '../components/Nav';
import profileImage from '../data/profileImg.json';
import '../styles/More.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlane,faWifi,faMoon,faBatteryFull,faGear,faFaceSmile,faPaintbrush,faHandPeace,faCircleUser,faComment
,faCircleInfo,faUtensils, faTv,faPencil,faGraduationCap,faBuildingColumns,faWonSign,faVideo,faHouse } from "@fortawesome/free-solid-svg-icons";
import {faBluetoothB} from "@fortawesome/free-brands-svg-icons"
import { authService } from '../fbase';

function More() {
  const myImages = profileImage[0];
  const navigate = useNavigate();

  const onLogOutClick = () => {
    authService.signOut();
    navigate("/"); // 홈으로 이동
  }
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
          <h1>More</h1>
          <div className="left_item"></div>
          <div className="right_item">
            <Link to="/"><FontAwesomeIcon icon={faGear} /></Link>
          </div>
        </div>
      </header>
    </body>
      

      <main>

    <section className="user_info">
      <h2 className="blind">사용자 정보</h2>
      <span className="profile_img prof_mo empty">
        <img src={myImages.image} alt="My name" />
      </span>
      <span className="profile_info">
        <span className="profile_name">My Name</span>
        <span className="profile_email">User@gmail.com</span>
      </span>
      <span className='logOut_Btn' onClick={onLogOutClick}>Log Out</span>
      <span className="chat_img"><Link to=""><FontAwesomeIcon icon={faComment} /></Link></span>
    </section>

    <section className="user_menu">
      <h2 className="blind">사용자 메뉴</h2>
      <ul>
        <li><Link to=""><FontAwesomeIcon icon={faFaceSmile} />Emotions</Link></li>
        <li><Link to=""><FontAwesomeIcon icon={faPaintbrush} />Themes</Link></li>
        <li><Link to=""><FontAwesomeIcon icon={faHandPeace} />Plus Friends</Link></li>
        <li><Link to=""><FontAwesomeIcon icon={faCircleUser} />Account</Link></li>
      </ul>
    </section>

    <section className="plus_friends">
      <header>
        <h2>Plus Friends</h2>
        <span><FontAwesomeIcon icon={faCircleInfo} />Learn More</span>
      </header>
      <ul className="plus_list">
        <li><Link to=""><FontAwesomeIcon icon={faUtensils} />Order</Link></li>
        <li><Link to=""><FontAwesomeIcon icon={faHouse} />Store</Link></li>
        <li><Link to=""><FontAwesomeIcon icon={ faTv} />TV Channel/Radio</Link></li>
        <li><Link to=""><FontAwesomeIcon icon={faPencil} />Creation</Link></li>
        <li><Link to=""><FontAwesomeIcon icon={faGraduationCap} />Education</Link></li>
        <li><Link to=""><FontAwesomeIcon icon={faBuildingColumns} />Politics/Society</Link></li>
        <li><Link to=""><FontAwesomeIcon icon={faWonSign} />Finance</Link></li>
        <li><Link to=""><FontAwesomeIcon icon={faVideo} />Movies/Music</Link></li>
      </ul>
    </section>

     <section className="more_app">
      <h2 className="blind">앱 더보기</h2>
      <ul>
        <li><Link to=""><span className="app_icon"></span>KaKao Story</Link></li>
        <li><Link to=""><span className="app_icon"></span>Path</Link></li>
        <li><Link to=""><span className="app_icon"></span>KaKao Friends</Link></li>
      </ul>
     </section>
  </main>
  <Nav />
    </>
  )
}

export default More