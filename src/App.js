// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Modal,
  Button,
  Form,
  Table,
} from "react-bootstrap";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import MaintenanceRequests from "./components/MaintenanceRequests";

const App = () => (
  <Router>
    <div>
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand as={Link} to="/">
          Building Maintenance
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/maintenance-requests">
              Maintenance Requests
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/projects" element={<Projects />} />

        <Route path="/maintenance-requests" element={<MaintenanceRequests />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
);

export default App;
