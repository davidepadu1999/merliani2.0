import React from "react";
import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import { Contatti } from "./components/Contatti/Contatti";
import { PartyPage } from "./components/Party/PartyPage";
import { GalleryPage } from "./components/GalleryPage/GalleryPage";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/party" element={<PartyPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
