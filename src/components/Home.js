import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [feedback, setFeedback] = useState("");

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    setFeedbackList([...feedbackList, feedback]);

    setFeedback("");
  };

  return (
    <div className="home-background">
      <Container className="home-container">
        <h2>Welcome to Building Maintenance</h2>
        <p>
          At Building Maintenance, we strive to provide comprehensive solutions
          for all your property maintenance needs. Whether you're a homeowner,
          property manager, or business owner, our team is dedicated to ensuring
          the optimal functioning and aesthetic appeal of your spaces.
        </p>
        <p>
          Our services cover a wide range of areas, including routine
          maintenance, project management, and addressing specific issues that
          may arise. With a commitment to quality and efficiency, we aim to
          exceed your expectations and create a positive experience for every
          client.
        </p>
        <p>
          Thank you for choosing Building Maintenance for all your property care
          needs.
        </p>

        {/* Submit Feedback Section */}
        <div className="feedback-section">
          <h3>Submit Feedback</h3>
          <Form onSubmit={handleFeedbackSubmit}>
            <Form.Group controlId="formFeedback">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your feedback..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

        {/* Display Submitted Feedback */}
        {feedbackList.length > 0 && (
          <div className="submitted-feedback">
            <h4>Submitted Feedback:</h4>
            <ul>
              {feedbackList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home;
