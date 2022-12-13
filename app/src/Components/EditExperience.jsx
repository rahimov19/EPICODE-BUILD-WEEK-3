import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperienceAction } from "../Redux/Actions";

export default function EditExperience(props) {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitChanges = async () => {
    const userInformation = {
      _id: props.xp._id,
      role: document.querySelector("#role").value,
      company: document.querySelector("#company").value,
      startDate: document.querySelector("#startDate").value,
      endDate: document.querySelector("#endDate").value,
      description: document.querySelector("#description").value,
      area: document.querySelector("#area").value,
    };
    console.log(userInformation);

    const options = {
      method: "PUT",
      body: JSON.stringify(userInformation),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAzMWM5NmRmYjAwMTUyMWE1YmIiLCJpYXQiOjE2NzA4MzYyODAsImV4cCI6MTY3MjA0NTg4MH0.-mjIeGuDeV798UyGFGMsc5ORRw1nL5qqVP2qkCqN7MY",
      },
    };
    try {
      const endpoint = `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences/${props.xp._id}`;
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
      <i class="bi bi-pencil-fill editOnPage" onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit Personal Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p id="required">* Required field</p>
          <Form>
            <Form.Group controlId="role">
              <Form.Label>Role*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Role"
                defaultValue={props.xp.role}
              />
            </Form.Group>
            <Form.Group controlId="company">
              <Form.Label>Company*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Company Name"
                defaultValue={props.xp.company}
              />
            </Form.Group>
            <Form.Group controlId="area">
              <Form.Label>Area*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City of Work"
                defaultValue={props.xp.area}
              />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date*</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter your new position"
                defaultValue={new Date(props.xp.startDate).toLocaleDateString(
                  "en-CA"
                )}
              />
            </Form.Group>
            <Form.Group controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter your city of residence"
                defaultValue={
                  props.xp.endDate
                    ? new Date(props.xp.endDate).toLocaleDateString("en-CA")
                    : null
                }
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Job Experience"
                defaultValue={props.xp.description}
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
