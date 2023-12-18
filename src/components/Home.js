// Home.js
import React from "react";
import { Container } from "react-bootstrap";
import "./Home.css";

const Home = () => (
  <div className="home-background">
    <Container className="home-container">
      <h2>Welcome to Building Maintenance</h2>
      <p className="paragraph">
        At Building Maintenance, we strive to provide comprehensive solutions
        for all your property maintenance needs. Whether you're a homeowner,
        property manager, or business owner, our team is dedicated to ensuring
        the optimal functioning and aesthetic appeal of your spaces.
      </p>
      <p className="paragraph">
        Our services cover a wide range of areas, including routine maintenance,
        project management, and addressing specific issues that may arise. With
        a commitment to quality and efficiency, we aim to exceed your
        expectations and create a positive experience for every client.
      </p>
      <p className="paragraph">
        Thank you for choosing Building Maintenance for all your property care
        needs.
      </p>
    </Container>
  </div>
);

export default Home;
