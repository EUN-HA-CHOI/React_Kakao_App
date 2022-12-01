import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import FriendList from '../components/FriendList';
import profileImage from '../data/profileImg.json';
import '../styles/Index.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlane,faWifi,faMoon,faBatteryFull,faGear,faMusic,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {faBluetoothB} from "@fortawesome/free-brands-svg-icons"
import Profile from './Profile';

function Index({ userObj }) {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const friendsImg = profileImage;
  const myProfile = friendsImg[0];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setProfile(null);
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setProfile(response.data); 
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>An error has occurred!</div>;
  if (!profile) return null;

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
           <h1>Friends <span>1</span></h1>
           <div className="left_item">
             <NavLink to="/">Manage</NavLink>
           </div>
           <div className="right_item">
             <Link to="/" className=' idx_ri'><FontAwesomeIcon icon={faMusic} /><FontAwesomeIcon icon={faMagnifyingGlass} /><FontAwesomeIcon icon={faGear} /></Link>
           </div>
         </div>
      </header>
    </body>
     

      <main>
        <form className="search_box">
          <fieldset className="search_inner">
            <legend className="blind">검색창</legend>
             <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="search" name="search" id="search" placeholder="Find firends, chats,Plus Friends" />
          </fieldset>
        </form>

        <section className="main_section">
          <header><h2>My Profile</h2></header>
          <ul>
            <li>
              <Link to="/profile" userObj={userObj}>
                <span className="profile_img prof_in empty">
                  <img src={myProfile.image} alt="profile images" />
                </span>
                <span className="profile_name">My Name</span>
                
              </Link>
            </li>
          </ul>
        </section>
        <section className="main_section">
          <header><h2>Friends</h2></header>
          <ul>
            
            {profile.map((profileInfo, idx) => {
              if (profileInfo.id > 1) {
                return (
                  <FriendList
                    userObj={userObj}
                    key = {profileInfo.id}
                    id = {profileInfo.id}
                    name = {profileInfo.name}
                    email = {profileInfo.email}
                    img = {friendsImg[idx].image}
                  />
                    )
                   }
                   return false;
                })}
          </ul>
        </section>
      </main>
      <Nav />
    </>
  );
}

export default Index;