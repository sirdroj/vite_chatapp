import React, { useState, useEffect } from "react";
import { getchat, sendmessage, deletemessage } from "../../Database_utils";

import "./Chatbox.scss";

const Chatbox = ({ user }) => {
  const [chats, setchats] = useState([]);
  const [text, settext] = useState("");

  useEffect(() => {
    console.log("Chatbox");
    getchat(setchats);
  }, []);

  const hSumbit = (e) => {
    e.preventDefault();
    if (text) {
      // console.log("Add", text,uid);

      sendmessage(user, text, new Date().getTime());
      settext("");
    }
  };

  return (
    <div className="chatbox">
      <div className="chats">
        {chats.map((chat) => {
          console.log("here",chat,chat.user_id,chat.color)
          let hisstyle={"border-color":chat.color}
          return (
            <div className="messagewrap"  style={{ "justify-content": user.user_id==chat.user_id ? 'left' : 'right' }}>
              <div className="message" style={hisstyle}>
                  <p className="messagetext "> {chat.message}</p>
                <div className="">
                  {/* <sub className="">user: {chat.user_id}</sub> */}
                  <div>
                    {/* <button className="p-3 border border-gray-300 rounded-full ml-2">✏️</button> */}
                    {/* <button
                      className="p-3 border border-gray-300 rounded-full ml-2"
                      onClick={() => {
                        deletemessage(chat.id);
                      }}
                    >
                      ❌
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p id="botm">-</p>
      <div className="sendbox">
        <form onSubmit={hSumbit}>
          <input
            className="textarea"
            id="sendbox"
            type="textarea"
            value={text}
            onChange={(e) => {
              settext(e.target.value);
            }}
          ></input>
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbox;
