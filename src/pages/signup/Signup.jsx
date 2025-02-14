import React, { useEffect, useState } from "react";
import { createuser, isvaliduser } from "../../Database_utils";
import "./Signup.scss";
const Signup = ({ setpg }) => {
  const [p1, setp1] = useState("");
  const [p2, setp2] = useState("");
  const [p, setp] = useState("");
  const [id, setid] = useState("");
  const [abovep, setabovep] = useState("Welcome");
  const [check, setcheck] = useState(0);
  const [cuser, setcuser] = useState();
  const [allgood, setallgood] = useState(false);
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function handlesubmit(e) {
    const arr = [];
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
    console.log(
      "effect called",
      id,
      p1,
      p2,
      check,
      p1 == p2,
      p1.length > 3,
      id.length > 3,
      check == 3
    );
    console.log("check", check);
    setallgood(false);
    if (id == p1 && id == "") {
      setabovep("Welcome");
    } else if (check == 2) {
      setabovep("id already exixts");
    } else if (id.length <= 3) {
      setabovep("id should be atleast 4 characters long");
    } else if (p1.length <= 3) {
      setabovep("password should be atleast 4 characters long");
    } else if (p1 == p2 && p1.length > 3 && id.length > 3 && check == 3) {
      setallgood(true);
      setabovep("all good");
      console.log("all good");
    }
  }, [id, p1, p2, allgood]);
  return (
    <div className=" flex justify-center p-5  h-screen bg-[#D4E4FF]">
      <div className="">
        <div>
          <img className="h-[170px] " src="Group 3.svg" />
        </div>
        <div className="flex justify-center">
          <div>
            <div className="text-[25px] font-bold text-blue1 text-center">
              Open Chat
            </div>
            <div className="loginbox border-[px]">
              <p className="text-center text-black min-h-[20px] text-[13px]">
                {abovep}
              </p>
              <form
                onSubmit={handlesubmit}
                className="space-y-2 w-[300px] text-sm"
              >
                <h2 className="loginboxelements">User Id</h2>
                <input
                  className="rounded-md px-2 p-1 w-full outline-none focus:ring-1 focus:ring-[#C3C2FF]"
                  type="text"
                  onChange={(e) => {
                    setid(e.target.value);
                  }}
                />
                <h2 className="loginboxelements">Password</h2>
                <input
                  className="rounded-md px-2 p-1 w-full outline-none focus:ring-1 focus:ring-[#C3C2FF]"
                  type="password"
                  placeholder="******"
                  onChange={(e) => {
                    setp1(e.target.value);
                    if (p1 !== p2) {
                      setabovep("passwords doesnot match");
                    }
                  }}
                />
                <h2 className="loginboxelements">confirm Password</h2>
                <input
                  className="rounded-md px-2 p-1 w-full outline-none focus:ring-1 focus:ring-[#C3C2FF]"
                  type="password"
                  placeholder="******"
                  onChange={(e) => {
                    setp2(e.target.value);
                    if (p1 !== p2) {
                      setabovep("passwords doesnot match");
                    }
                  }}
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="p-2 py-4 mt-7  text-center w-full bg-blue1 text-white rounded-lg text-lg"
                  >
                    SIGNUP
                  </button>
                </div>
              </form>
              <p className="my-3 text-sm text-center">
                Already Have one ?{" "}
                <span
                  className="text-blue1 cursor-pointer font-bold underline"
                  onClick={() => {
                    setpg(0);
                  }}
                >
                  Login
                </span>{" "}
                using your ID.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
