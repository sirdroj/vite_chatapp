import React, { useState } from "react";
// import "./Navbar2.scss"
const Navbar2 = ({ setpg, username }) => {
  return (
    <nav class=" h-screen bg-white text-black shadow-xl">
      <ul class="nav-links flex flex-col justify-between">
        <div class="menu  lg:p-3 p-2 space-y-2 text-center">
          <li className="lg:p-3 p-[3px] px-[8px] lg:px-4  rounded-2xl bg-blue1 font-asap font-bold text-white text-sm lg:text-2xl">
            O
          </li>
          <li
            onClick={() => {
              // setpg(0);
            }}
            className="flex justify-center"
          >
            <img src="messages.svg" />
          </li>
          <li
            onClick={() => {
              setpg(0);
            }}
            className="flex justify-center"
          >
            <img src="logout.svg" />
          </li>
        </div>
        <div className="flex justify-center py-4">
          <img src="info.svg" />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar2;
