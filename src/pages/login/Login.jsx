import React, { useEffect, useState } from "react";
import "./login.scss";
import { isvaliduser } from "../../Database_utils";
const Login = ({ setuser, setpg }) => {
  const [check, setcheck] = useState(0);
  const [id, setid] = useState("123");
  const [password, setpassword] = useState("");
  const [status,setststus]=useState("")
  function callalert(){
    if (check == 1) {
      console.log(check + " all good");
      setststus("you are being redirected to")
      setpg(1);
    } else if (check == 2) {
      console.log(check + " password incorrect");
      setststus( " password incorrect");
    } else if(check==3) {
      console.log(check + " id password not match");
      setststus( "ID Password does not match");
    }
  }
  useEffect(() => {
    console.log("useeffect called");
    callalert()
  }, [check]);
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("handle submit called");
    isvaliduser(id, password, setcheck,setuser);
  };
  return (
    <div>

       <nav>
            <h1>Smart chat</h1>
            <a onClick={()=>{setpg(2)}}>signup</a>
        </nav>
    <div className="login">
      <div className="loginbox">
        <h1>Login</h1>
        <p style={{color:"red"}}>{status}</p>
        <form onSubmit={handlesubmit}>
          <h2 className="loginboxelements">User Id</h2>
          <input
            className="loginboxelements"
            type="text"
            onChange={(e) => {
              setid(e.target.value);
            }}
            />
          <h2 className="loginboxelements">Password</h2>
          <input
            className="loginboxelements"
            type="text"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            />
          <input type="submit" value="login" />
        </form>
      </div>
    </div>
            </div>
  );
};

export default Login;
