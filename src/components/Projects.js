// Projects.js
import React, { useState, useEffect } from 'react';
import { Container, Modal, Button, Form } from 'react-bootstrap';
import './Projects.css'; 
import api from '../api'; 

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({});

  //get projects when the page loads
  //uses async/await to wait for the api to return the maintence requests, this ensures the projects array [ ] is not blank.
  useEffect( async () => {
    const gettingProjects = await api.fetchMaintenanceRequests()

    setProjects(gettingProjects);
  }, []);

  const addProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({});
    setShowModal(false);
  };

  const deleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  return (
    <Container>
      <h2 className="projects-heading">Our Projects</h2>
      <button className="add-project-button" onClick={() => setShowModal(true)}>
        Add Project
      </button>

      <table className="project-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="project-item">
              <td>{index + 1}</td>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>
                <button
                  className="delete-project-button"
                  onClick={() => deleteProject(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="project-form">
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter project title"
                value={newProject.title || ''}
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter project description"
                value={newProject.description || ''}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              />
            </Form.Group>
            <Button
              className="submit-project-button"
              variant="primary"
              onClick={addProject}
            >
              Add Project
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Projects;
