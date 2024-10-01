import { useState, useEffect } from "react";
import "../assets/style/App.css";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Profile from "../containers/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsingContext from "../context/UsingContext";
import BookCard from "../components/BookCard";

function App() {
  return (
    <>
      <BrowserRouter basename="/vaninaRetoWinter07">
        <UsingContext>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/carritodecompras" element={<BookCard />}></Route>
            </Routes>
          </Layout>
        </UsingContext>
      </BrowserRouter>
    </>
  );
}

export default App;
