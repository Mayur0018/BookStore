import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Courses from "./Courses/Courses";
function App() {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Courses/>} />
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
