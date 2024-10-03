import { useState, useEffect } from "react";
import "../assets/style/App.css";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Profile from "../containers/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsingContext from "../context/UsingContext";
import BookCard from "../containers/ShoppingCart";
import ShoppingCart from "../containers/ShoppingCart";

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';
// import {
//   getDatabase,
//   ref,
//   onValue,
//   onChildAdded,
//   set,
//   push,
//   update,
//   onChildChanged,
//   onChildRemoved,
//   onChildMoved,
// } from "firebase/database";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAGtSSEko1C6pI_2-5LWd3vW4PnaUIADtY",
//   authDomain: "winterhack2024vani.firebaseapp.com",
//   databaseURL: "https://winterhack2024vani-default-rtdb.firebaseio.com",
//   projectId: "winterhack2024vani",
//   storageBucket: "winterhack2024vani.appspot.com",
//   messagingSenderId: "449046923985",
//   appId: "1:449046923985:web:cbb6c9be9e9d2a4c2d93f0",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

function App() {
  const [books, setBooks] = useState([]);

  // const db = getDatabase();

  useEffect(() => {
    // const starCountRef = ref(db, "Books/");
    // onValue(starCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   setBooks(data);
    //   console.log("Books desde useEffect ", data);
    // });
  }, []);

  return (
    <>
      <BrowserRouter basename="/vaninaRetoWinter07">
        <UsingContext>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
            </Routes>
          </Layout>
        </UsingContext>
      </BrowserRouter>
    </>
  );
}

export default App;
