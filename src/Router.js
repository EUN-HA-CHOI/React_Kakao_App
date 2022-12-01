import React, {useEffect,useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Auth from './routes/Auth';
import Index from './routes/Index';
import Chats from './routes/Chats';
import Find from './routes/Find';
import More from './routes/More';
import Profile from './routes/Profile';
import Chatting from './routes/Chatting';
import axios from 'axios';

function AppRouter({isLoggedIn,userObj }) {
  const [users, setUsers] = useState([]);
  const [texts, setTexts] = useState([]);

  const getUsers = async() => {
    let response = await axios ("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
  }

  const getTexts = async() => {
    let response = await axios ("https://jsonplaceholder.typicode.com/todos");
    setTexts(response.data)
   // console.log(response)
  }

  useEffect(() => {
    getUsers();
    getTexts();
  },[])
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>       
        {isLoggedIn ? (
          <>
      <Route path='/' element={<Index userObj={userObj} users={users} texts={texts}/>}/>
     <Route path="/Chats" element={<Chats userObj={userObj} users={users} texts={texts}/>}/>
     <Route path="/Chatting" element={<Chatting userObj={userObj}/>}/>
     <Route path="/Find" element={<Find/>}/>
     <Route path="/More" element={<More userObj={userObj} users={users} texts={texts}/>}/>
     <Route path="/Profile" element={<Profile userObj={userObj} users={users} texts={texts}/>}/>
     </>
        ) : (
        <Route path='/' element={<Auth/>}/>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
//로그인시 true -> Home 화면 , 로그인 안되면 false -> Auth 화면 뜸
// && 연산자 : isLoggedIn 가 true 이면 < Navigation /> 실행해라 (삼항연산자 보다 간단하게 사용됨.)