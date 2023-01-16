import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home"
import OTP from "./Pages/OTP"

import { Container } from 'react-bootstrap'
import { AuthProvider } from "./Context/AuthContext";


function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/otp" element={<OTP />} />
              <Route path="/" element={<Signup />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container >
  );
}

export default App;
