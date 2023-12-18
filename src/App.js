// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import Home from "./components/Home";
import MaintenanceRequests from "./components/MaintenanceRequests";

const App = () => (
  <Router>
    <div className="App">
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand as={Link} to="/">
          <span className="brand-text">Building Maintenance</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="custom-button">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/maintenance-requests"
              className="custom-button"
            >
              Maintenance Requests
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/maintenance-requests" element={<MaintenanceRequests />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
);

export default App;
