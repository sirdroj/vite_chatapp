import React from 'react'
import Navbar2 from '../../components/navbar/Navbar2'
import Chatbox from '../../components/chatbox/Chatbox'
import "./Home.scss"
const Home = ({user,setpg}) => {
  return (
    <div className='home'>
        home
        <Navbar2 setpg={setpg}/>
        <Chatbox user={user}/>
    </div>
  )
}

export default Home