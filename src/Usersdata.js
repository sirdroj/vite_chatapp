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
const contactsCollectionref = collection(db, "users");


const createuser = async (id, password) => {
  await addDoc(contactsCollectionref, {
    user_id: id,
    password: password,
  });
};


function fetchDataFromDatabase(myCollectionRef) {
  return getDocs(myCollectionRef)
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      return [];
    });
}

// Example usage
// const myCollectionRef = collection(firestore, 'myCollection');
const getUsers =(id, password,setcheck)=>{

fetchDataFromDatabase(contactsCollectionref)
  .then(data => {
    console.log("data",data,id,password);
    // return(data) // Array of data from the database
    data.map((user) => {
      console.log(user.user_id,id)
        if (user.user_id == id) {
          if (user.password == password) {
            setcheck(1);
          } else {
            setcheck(2);
          }
        }
      });
  })
  .catch(error => {
    console.error('Error:', error);
    return([])
  });
}

const isvaliduser = (id, password,setcheck) => {
  let x=getUsers(id, password,setcheck)
  console.log("-",x)
  return(x)
};
export { createuser, isvaliduser };
