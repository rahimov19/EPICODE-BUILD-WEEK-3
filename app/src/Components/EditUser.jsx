import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserAction } from "../Redux/Actions";

export default function EditUser() {
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const submitChanges = async () => {
    const userInformation = {
      _id: user._id,
      name: document.querySelector("#name").value,
      surname: document.querySelector("#surname").value,
      title: document.querySelector("#title").value,
      area: document.querySelector("#area").value,
      bio: document.querySelector("#bio").value,
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
      const endpoint = "https://striveschool-api.herokuapp.com/api/profile/";
      const response = await fetch(endpoint, options);
      if (response.ok) {
        alert("User information is updated successfully");
      } else {
        throw new Error("Error while uploading information");
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(fetchUserAction());
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <i class="bi bi-pencil-fill editbutton" onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit Personal Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p id="required">* Required field</p>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                defaultValue={user.name}
              />
            </Form.Group>
            <Form.Group controlId="surname">
              <Form.Label>Surname*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter surname"
                defaultValue={user.surname}
              />
            </Form.Group>
            <Form.Group controlId="title">
              <Form.Label>Title*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your new position"
                defaultValue={user.title}
              />
            </Form.Group>
            <Form.Group controlId="area">
              <Form.Label>City*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your city of residence"
                defaultValue={user.area}
              />
            </Form.Group>
            <Form.Group controlId="bio">
              <Form.Label>Bio*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your biology"
                defaultValue={user.bio}
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
