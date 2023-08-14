import React, { useState, useEffect } from "react";
import { db } from "./Database";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
const chatboxref = collection(db, "chatbox");

const userref = collection(db, "users");

const createuser = async (id, password,color) => {
  await addDoc(userref, {
    user_id: id,
    password: password,
    color:color
  });
};

function fetchDataFromDatabase(myCollectionRef) {
  return getDocs(myCollectionRef)
    .then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return [];
    });
}

// Example usage
// const myCollectionRef = collection(firestore, 'myCollection');
const getUsers = (id, password, setcheck,setuser) => {
  fetchDataFromDatabase(userref)
    .then((data) => {
    //   console.log("data", data, id, password);
      let k=3;
      // return(data) // Array of data from the database
      data.map((user) => {
        // console.log(user.user_id, id);
        if (user.user_id == id) {
          if (user.password == password) {
            k=1;
            setuser(user)
            // setcheck(1);
            // console.log("isvalid user returned",1)
            return
          } 
          k=2
        //   console.log("isvalid user returned",2)
          return
        }
      });
      console.log("isvalid user returned",k)
      setcheck(k)
      return
    })
    .catch((error) => {
      console.error("Error:", error);
      return [];
    });
};

const isvaliduser = (id, password, setcheck,setuser) => {
  let x = getUsers(id, password, setcheck,setuser);
//   console.log("-", x);
    // console.log("isvalid user returned",x)
  return x;
};

// useEffect(() => {
//     const unsubscribe = onSnapshot(chatboxref, (snapshot) => {
//       const updatedUsers = snapshot.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       setchat(updatedUsers);
//     });

//     // Clean up the listener when the component unmounts
//     return () => {
//       unsubscribe();
//     };
//   }, []);

// }
// const getchat =(setchat)=>{

//     fetchDataFromDatabase(chatboxref)
//       .then(data => {
//         console.log("chat data",data);
//         // return(data) // Array of data from the database
//         setchat(data)
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         return([])
//       });
//     }

const sendmessage = async (user, message, time) => {
  await addDoc(chatboxref, {
    user_id: user.user_id,
    message: message,
    time: time,
    color:user.color
  });
};
const deletemessage = async (id) => {
  const userDoc = doc(db, "chatbox", id);
  await deleteDoc(userDoc);
};

function getChat(chatId, onDataUpdate) {
  // Replace 'chats' with your collection name

  const unsubscribe = onSnapshot(chatId, (querySnapshot) => {
    const chatData = [];

    querySnapshot.forEach((doc) => {
      chatData.push({ id: doc.id, ...doc.data() });
    });

    onDataUpdate(chatData);
  });

  // Return the unsubscribe function to stop listening when needed
  return unsubscribe;
}

// Example usage
function getchat(setchat) {
  const chatId = "your-chat-id"; // Replace with your chat ID
  const unsubscribe = getChat(chatboxref, (chatData) => {
    console.log("Chat Data:", chatData);
    chatData.sort((a, b) => a.time - b.time);
    setchat(chatData);
  });
}

export { sendmessage, createuser, isvaliduser, getchat, deletemessage };
