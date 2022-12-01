import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import ChatList from '../components/ChatList';
import profileImage from '../data/profileImg.json';
import '../styles/Chats.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlane,faWifi,faMoon,faBatteryFull,faGear,faMagnifyingGlass,faComment } from "@fortawesome/free-solid-svg-icons";
import {faBluetoothB} from "@fortawesome/free-brands-svg-icons"


function Chats({userObj}) {
 const [profile, setProfile] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 const friendsImg = profileImage;

 useEffect(() => {
  const fetchUsers = async () => {
    try {
      setError(null);
      setProfile(null);
      setLoading(true);
      const response = await axios.get (
        'https://jsonplaceholder.typicode.com/users'
      );
      setProfile(response.data);
    } catch (e) {
      setError(e);
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
     <header className='chats'>
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
             <Link to="/"><FontAwesomeIcon icon={faGear} /></Link>
           </div>
         </div>
      </header>
    </body>
       
      <main className='chats_main'>
        <form className="search_box">
          <fieldset className="search_inner">
            <legend className="blind">검색창</legend>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="search" name="search" id="search" placeholder="Find firends, chats,Plus Friends" />
          </fieldset>
        </form>

        <section className="main_section">
          <header><h2>Friends</h2></header>
          <ul>
            {profile.map((chat, idx) => (
              <ChatList 
              key = {chat.id}
              id = {chat.id}
              name = {chat.name}
              website = {chat.website}
              img = {friendsImg[idx].image}
              />
            ))}
          </ul>
        </section>
        <div class="chat_fa_btn">
          <Link to=""><FontAwesomeIcon icon={faComment} /></Link>
        </div>
      </main>
      <Nav />
    </>
  )
}

export default Chats;