import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="container-fluid p-0 mx-0">
      <Header />
      <Navbar />
      <main className="jof-app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Story />
      <Footer />
    </div>
  );
}

export default App;
