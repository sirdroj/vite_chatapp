import React, { useState, useEffect, useRef } from "react";
import { getchat, sendmessage, deletemessage } from "../../Database_utils";
import { formatDistanceToNow, isToday, format } from "date-fns";

// import "./Chatbox.scss";

const Chatbox = ({ user }) => {
  const [chats, setchats] = useState([]);
  const [text, settext] = useState("");
  const chatContainerRef = useRef(null);
  function scrollToBottom() {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }
  useEffect(() => {
    scrollToBottom();
  }, [chats]);

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
  const hexToRgba = (hex, alpha) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  let current_colour = "--";
  return (
    <div className="flex-1 h-screen p-2 text-sm font-roboto">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex justify-between border-b-[1px]">
          <div>
            <h1 className="font-bold">Open Chat</h1>
            <div className="flex items-center">
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5" cy="5.5" r="5" fill="#68D391" />
              </svg>{" "}
              <span className="mx-1">Active</span>
            </div>
          </div>
          <div>
            You are <b>{user.user_id}</b>
          </div>
        </div>

        {/* Main Chat Section */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex flex-col flex-1  relative overflow-hidden">
            {/* Chats Section */}
            <div
              className="chats flex-1 auto-scroll overflow-auto border-red "
              ref={chatContainerRef}
            >
              <style>
        {`
          /* Webkit Browsers */
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 2px;
          }
          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 2px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }

          /* Firefox */
          * {
            scrollbar-width: thin;
            scrollbar-color: #888 #f1f1f1;
          }
        `}
      </style>
              {/* {chats.map((chat) => {
                let hisstyle = { borderColor: chat.color };
                if (current_colour != chat.color) {
                  current_colour;
                }
                return (
                  <div
                    key={chat.id}
                    className=" flex "
                    style={{
                      justifyContent:
                        user.user_id === chat.user_id ? "left" : "right",
                    }}
                  >
                    <div
                      style={{ backgroundColor: hexToRgba(chat.color, 0.2) }}
                    >
                      xx{" "}
                    </div>
                    <div>
                      <div className="">
                        <p>{chat.message}</p>
                        <div>
                          <p>{chat.user_id}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })} */}

              {chats.map((chat, index) => {
                let isNewColor =
                  index === 0 || chats[index - 1].color !== chat.color;

                return (
                  <div
                    key={chat.id}
                    className="flex relative px-12 my-2 "
                    style={{
                      justifyContent:
                        user.user_id === chat.user_id ? "left" : "right",
                    }}
                  >
                    {/* Render color div only when color changes */}
                    <div className={`relative bg-blue1 rounded-xl text-white pt-2 px-3 ${user.user_id === chat.user_id?"":""} `}>
                      {isNewColor && (
                        <div
                        className={`absolute rounded-md h-10 w-4 mx-2 -top-0 ${user.user_id === chat.user_id?"-left-8 ":"-right-8"}`}
                          style={{
                            backgroundColor: hexToRgba(chat.color, 0.4),
                          }}
                        >
                          
                        </div>
                      )}

                      <div >
                        <div className="">
                          <p>{chat.message}</p>
                          <div className="flex justify-start">
                            <p className="text-gray-200 text-[10px]">{chat.user_id}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input Box */}
            <div className="h- border-t  items-center sticky bottom-0 bg-white">
              <form
                onSubmit={hSumbit}
                className="flex items-center gap-2 border border-[#E2E8F0] rounded-lg"
              >
                <input
                  className="p-2   rounded flex-1"
                  type="text"
                  placeholder="Type a message"
                  value={text}
                  onChange={(e) => settext(e.target.value)}
                />
                <button
                  type="submit"
                  className="  pr-5 py-2  text-white rounded"
                >
                  <img src="paper-plane.svg" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
