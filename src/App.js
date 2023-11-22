import React from "react";
import "./App.css";
import Pricing from "./components/Pricing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
