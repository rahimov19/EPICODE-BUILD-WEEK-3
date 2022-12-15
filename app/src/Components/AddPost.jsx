import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import { fetchAllPostsAction } from "../Redux/Actions";

export default function AddPost() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const submitChanges = async () => {
    const postInformation = {
      //   _id: user._id,
      text: document.querySelector("#posttext").value,
    };
    console.log(postInformation);

    const options = {
      method: "POST",
      body: JSON.stringify(postInformation),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAzMWM5NmRmYjAwMTUyMWE1YmIiLCJpYXQiOjE2NzA4MzYyODAsImV4cCI6MTY3MjA0NTg4MH0.-mjIeGuDeV798UyGFGMsc5ORRw1nL5qqVP2qkCqN7MY",
      },
    };
    try {
      const endpoint = `https://striveschool-api.herokuapp.com/api/posts/`;
      const response = await fetch(endpoint, options);
      if (response.ok) {
        alert("Post created successfully");
      } else {
        throw new Error("Error while uploading information");
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(fetchAllPostsAction());
    handleClose();
  };

  return (
    <>
      <input
        type="text"
        placeholder="New Post"
        id="middleinput"
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Create a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="posttop">
              <div>
                <img src={user.image} alt="postautor" className="authorimg" />
              </div>
              <div className="author">
                <p>
                  {user.name} {user.surname}{" "}
                  <span>
                    <i className="bi bi-dot"></i> 1-st
                  </span>
                </p>

                <p>{user.title}</p>
                <p>1d</p>
              </div>
              <div className="postH5">
                <h5>+ Follow</h5>
              </div>
            </div>
          </div>
          <Form>
            <Form.Group controlId="posttext">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="What do you want to share?"
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
