import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Staff from "../Staff/Staff";

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <div className="page">
      <div className="page__content">
        <Header onLoginClick={() => setLoginOpen(true)} />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
