import "./App.css";
import "./style/Landingpage.css";
import "./style/Intropage.css";
import "./style/Images.css";
import "./style/Form.css";
import "./style/Footer.css";
import "./style/Aboutme.css";
import "./style/Reservation.css";
import "./style/Mediapage.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Aboutme from "./Views/Aboutme";
import Homepage from "./Views/Homepage";
import AOS from "aos";
import "aos/dist/aos.css";
import Reservation from "./Views/Reservation";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </>
  );
}

export default App;
