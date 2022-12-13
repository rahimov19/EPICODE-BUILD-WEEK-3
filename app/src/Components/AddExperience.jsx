import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExperienceAction } from "../Redux/Actions";

export default function AddExperience() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitChanges = async () => {
    const experienceInformation = {
      //   _id: user._id,
      role: document.querySelector("#role").value,
      company: document.querySelector("#company").value,
      startDate: document.querySelector("#startDate").value,
      endDate: document.querySelector("#endDate").value,
      description: document.querySelector("#description").value,
      area: document.querySelector("#area").value,
    };
    console.log(experienceInformation);

    const options = {
      method: "POST",
      body: JSON.stringify(experienceInformation),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAzMWM5NmRmYjAwMTUyMWE1YmIiLCJpYXQiOjE2NzA4MzYyODAsImV4cCI6MTY3MjA0NTg4MH0.-mjIeGuDeV798UyGFGMsc5ORRw1nL5qqVP2qkCqN7MY",
      },
    };
    try {
      const endpoint = `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences`;
      const response = await fetch(endpoint, options);
      if (response.ok) {
        alert("User information is updated successfully");
      } else {
        throw new Error("Error while uploading information");
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(fetchExperienceAction(user._id));
    handleClose();
  };

  return (
    <>
      <i className="bi bi-plus-lg " onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Personal Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p id="required">* Required field</p>
          <Form>
            <Form.Group controlId="role">
              <Form.Label>Role*</Form.Label>
              <Form.Control type="text" placeholder="Enter Role" />
            </Form.Group>
            <Form.Group controlId="company">
              <Form.Label>Company*</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
            <Form.Group controlId="area">
              <Form.Label>Area*</Form.Label>
              <Form.Control type="text" placeholder="Enter City of Work" />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date*</Form.Label>
              <Form.Control type="date" placeholder="Enter your new position" />
            </Form.Group>
            <Form.Group controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter your city of residence"
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Job Experience"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={submitChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
