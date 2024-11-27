import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Index from "./Components/Index";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Header />
        <Routes >
          <Route path="/"  element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
