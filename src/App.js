import React from "react";
import { Header, Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home, Contact, About, News } from "./pages";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
