import { useState, useEffect } from "react";
import { getRandomColor } from "./utils";
import "./App.css";
// import { sendmessage ,createuser,isvaliduser,getchat} from './Database_utils';
import Chatbox from "./components/chatbox/Chatbox";
import Navbar2 from "./components/navbar/Navbar2";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
function App() {
  const [pg,setpg]=useState(0)
  const [check, setcheck] = useState(0);
  // const [cd,setcd]=useState(0)
  const [chat, setchat] = useState([]);
  const [user, setuser] = useState({user_id:"temp",
color:"green"});

  // useEffect(() => {
  //   let id = Math.random();
  //   setuid(String(id).slice(2));
  // }, []);
  function display(pg){
    let dis;
    switch(pg){
      case 0:
        dis=<Login setuser={setuser} setpg={setpg} />
        break;
      case 1:
        dis=<Home user={user} setpg={setpg} />
        break
      case 2:
        dis=<Signup setpg={setpg}/>
        break
    }
    return dis
  }
  return (
    <div className="App">
      {/* <Navbar2 />
      <Chatbox uid={uid}/> */}
      {/* am */}
      {display(pg)}
    </div>
  );
}

export default App;