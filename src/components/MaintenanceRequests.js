// MaintenanceRequests.js
import React, { useState, useEffect } from "react";
import { Container, Modal, Button, Form, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./MaintenanceRequests.css";

const MaintenanceRequests = () => {
  const { id } = useParams();
  const apiUrl =
    "https://654babf05b38a59f28ef7ea3.mockapi.io/react/MaintenanceRequests";

  const [showModal, setShowModal] = useState(false);
  const [requests, setRequests] = useState([]);
  const [issues, setIssues] = useState("");
  const [addresses, setAddresses] = useState("");
  const [times, setTimes] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setRequests(data))
      .catch((error) => console.error("Error:", error));
  }, [apiUrl]);

  function addRequestToAPI(newRequest) {
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRequest),
    })
      .then((response) => response.json())
      .then((data) => {
        setRequests([...requests, data]);
        console.log("Request added:", data);
      })
      .catch((error) => console.error("Error:", error));
  }

  const addRequest = () => {
    let newRequest = {
      address: addresses,
      time: times,
      issue: issues,
    };
    addRequestToAPI(newRequest);
    setShowModal(false);
  };

  const deleteRequest = (id) => {
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedRequests = requests.filter((request) => request.id !== id);
        setRequests(updatedRequests);
        console.log("Request deleted:", id);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Container className="maintenance-requests-background">
      <h2>Maintenance Requests for ID: {id}</h2>
      <Button className="Button" onClick={() => setShowModal(true)}>
        Add Request
      </Button>

      <Table striped bordered hover className="Table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Address</th>
            <th>Time</th>
            <th>Issue</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.address}</td>
              <td>{request.time}</td>
              <td>{request.issue}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => deleteRequest(request.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                onChange={(e) => setAddresses(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter time"
                onChange={(e) => setTimes(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formIssue">
              <Form.Label>Issue</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter issue description"
                onChange={(e) => setIssues(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button className="Button" variant="primary" onClick={addRequest}>
            Add Request
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MaintenanceRequests;
