import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Story from "./components/Story";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import OurServices from "./pages/our_services/OurServices";
import ContactUs from "./pages/contact_us/ContactUs";
import PopupContactForm from "./components/PopupContactForm";
import PopupContactFormButton from "./components/PopupContactFormButton";

function App() {
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(!openForm);
    // console.log("clicked");
  };

  return (
    <div className="container-fluid p-0 mx-0">
      <Header />
      <Navbar />
      <ToastContainer />
      <main className="jof-app-main">
        <Routes>
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <PopupContactForm openForm={openForm} handleOpenForm={handleOpenForm} />
      <PopupContactFormButton handleOpenForm={handleOpenForm} />
      <Story />
      <Footer />
    </div>
  );
}

export default App;
