import React, { useEffect, useState } from "react";
import { createuser, isvaliduser } from "../../Database_utils";
import "./Signup.scss"
const Signup = ({ setpg }) => {
  const [p1, setp1] = useState("");
  const [p2, setp2] = useState("");
  const [p, setp] = useState("");
  const [id, setid] = useState("");
  const [abovep, setabovep] = useState("");
  const [check, setcheck] = useState(0);
  const [cuser, setcuser] = useState();
  const [allgood, setallgood] = useState(false);
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function handlesubmit(e) {
    const arr=[]
    console.log("submit called", allgood);
    e.preventDefault();
    if (allgood) {
      createuser(id, p1, getRandomColor());
      alert("user created");
      setpg(0);
    }
  }
  useEffect(() => {
      isvaliduser(id, p1, setcheck, setcuser);
      console.log("effect called", id,p1, p2, check,p1==p2,p1.length > 3,id.length>3,check == 3);
      setallgood(false);
    if(id==p1 && id==""){
        setabovep("")
    }
    else if (id.length <= 3) {
      setabovep("id should be atleast 4 characters long");
    } else if (p1.length <= 3) {
        setabovep("password should be atleast 4 characters long");
    } 
    else if(check==2){
        setabovep("id already exixts")
    }
    else if (p1 == p2 && p1.length > 3 && id.length > 3 && check == 3) {
        setallgood(true);
        setabovep("all good");
        console.log("all good");
    }
}, [ id, p1, p2,allgood]);
  return (
    <div>

        <nav>
            <h1>Smart chat</h1>
            <a onClick={()=>{setpg(0)}}>login</a>
        </nav>
    <div className="signup">
      <form onSubmit={handlesubmit}>
      <h1>signup</h1>
        <sup style={{color:allgood?"rgb(116, 255, 81)":"red"}}>{abovep}</sup>
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
            setp1(e.target.value);
            if (p1 !== p2) {
                setabovep("passwords doesnot match");
            } 
        }}
        />
        <h2 className="loginboxelements">confirm Password</h2>
        <input
          className="loginboxelements"
          type="text"
          onChange={(e) => {
              setp2(e.target.value);
              if (p1 !== p2) {
                  setabovep("passwords doesnot match");
                } 
            }}
            />
        <input type="submit" value="signup" />
      </form>
    </div>
            </div>
  );
};

export default Signup;
