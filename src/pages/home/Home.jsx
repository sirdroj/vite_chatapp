import React from "react";
import Navbar2 from "../../components/navbar/Navbar2";
import Chatbox from "../../components/chatbox/Chatbox";
import "./Home.scss";
const Home = ({ user, setpg }) => {
  return (
    <div className="flex w-screen bg-[#FFFFFF]">
      {/* <div className="w-20"> */}
        <Navbar2 setpg={setpg} />
      {/* </div> */}
      {/* <div className="flex-1"> */}
        <Chatbox user={user} />
      {/* </div> */}
    </div>
  );
};

export default Home;
