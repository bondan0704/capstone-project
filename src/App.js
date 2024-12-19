import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Indonesia from "./pages/Indonesia";
import Programming from "./pages/Programming";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Indonesia />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
