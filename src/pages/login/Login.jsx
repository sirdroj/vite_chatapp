import React, { useEffect, useState } from "react";
// import "./login.scss";
import { isvaliduser } from "../../Database_utils";
const Login = ({ setuser, setpg }) => {
  const [check, setcheck] = useState(0);
  const [id, setid] = useState("123");
  const [password, setpassword] = useState("");
  const [status, setststus] = useState("Welcome Back");
  function callalert() {
    if (check == 1) {
      console.log(check + " all good");
      setststus("you are being redirected to");
      setpg(1);
    } else if (check == 2) {
      console.log(check + " password incorrect");
      setststus(" password incorrect");
    } else if (check == 3) {
      console.log(check + " id password not match");
      setststus("ID Password does not match");
    }
  }
  useEffect(() => {
    console.log("useeffect called");
    callalert();
  }, [check]);
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("handle submit called");
    isvaliduser(id, password, setcheck, setuser);
  };
  return (
    <div className=" flex justify-center p-5  h-screen bg-[#D4E4FF]">
      {/* <nav>
            <h1>Smart chat</h1>
            <a onClick={()=>{setpg(2)}}>signup</a>
        </nav> */}
      <div className="">
        <div>
          <img className="h-[200px]" src="Group 3.svg" />
        </div>
        <div className="flex justify-center">
          <div>
            <div className="text-[30px] font-bold text-blue1 text-center">Open Chat</div>
            <div className="loginbox border-[px]">
              <p  className="text-center text-black">{status}</p>
              <form onSubmit={handlesubmit} className="space-y-2 w-[300px] text-sm">
                <h2 className="loginboxelements">User ID</h2>
                <input
                  className="rounded-md p-2 py-1 w-full"
                  placeholder="ex. aman"
                  type="text"
                  onChange={(e) => {
                    setid(e.target.value);
                  }}
                />
                <h2 className="loginboxelements">Password</h2>
                <input
                  className="rounded-md px-2 pt-1  w-full active:stroke-none outline-[#C3C2FF] outline-[1px]"
                  type="password"
                  placeholder="******"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                <div className="flex justify-center" >
                  <button type="submit" className="p-2 py-4 mt-7  text-center w-full bg-blue1 text-white rounded-lg text-lg">LOGIN</button>
                </div>
              </form>
              <p className="my-3 text-sm text-center">New here? <span className="text-blue1 cursor-pointer font-bold underline" onClick={()=>{setpg(2)}}>Sign up</span> to Creat a new ID.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
