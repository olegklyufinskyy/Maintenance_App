// MaintenanceRequests.js
import React, { useState } from "react";
import { Container, Modal, Button, Form, Table } from "react-bootstrap";
import "./MaintenanceRequests.css";

const MaintenanceRequests = () => {
  const [showModal, setShowModal] = useState(false);
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({
    address: "",
    time: "",
    issue: "",
  });

  const addRequest = () => {
    setRequests([...requests, newRequest]);
    setNewRequest({ address: "", time: "", issue: "" });
    setShowModal(false);
  };

  const deleteRequest = (index) => {
    const updatedRequests = [...requests];
    updatedRequests.splice(index, 1);
    setRequests(updatedRequests);
  };

  return (
    <Container>
      <h2>Maintenance Requests</h2>
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
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{request.address}</td>
              <td>{request.time}</td>
              <td>{request.issue}</td>
              <td>
                <Button variant="danger" onClick={() => deleteRequest(index)}>
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
                value={newRequest.address}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, address: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter time"
                value={newRequest.time}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, time: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formIssue">
              <Form.Label>Issue</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter issue description"
                value={newRequest.issue}
                onChange={(e) =>
                  setNewRequest({ ...newRequest, issue: e.target.value })
                }
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
