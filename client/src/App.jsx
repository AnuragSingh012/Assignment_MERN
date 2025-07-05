import React from 'react'
import { Routes, Route } from "react-router";
import SignUp from './components/SignUp';
import SignIn from "./components/SignIn";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App