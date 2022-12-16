import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import { fetchAllPostsAction } from "../Redux/Actions";
import { OverlayTrigger } from "react-bootstrap";
import Popover from "react-bootstrap/Popover";
import { useForm } from "react-hook-form";

export default function PostPopover(props) {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState(null);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => {
    setShow(false);
    setShow2(true);
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = React.useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const deletePost = async () => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAzMWM5NmRmYjAwMTUyMWE1YmIiLCJpYXQiOjE2NzA4MzYyODAsImV4cCI6MTY3MjA0NTg4MH0.-mjIeGuDeV798UyGFGMsc5ORRw1nL5qqVP2qkCqN7MY",
      },
    };
    try {
      const endpoint = `https://striveschool-api.herokuapp.com/api/posts/${props.post._id}`;
      const response = await fetch(endpoint, options);
      if (response.ok) {
        alert("Post deleted successfully ");
      } else {
        throw new Error("Error while uploading information");
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(fetchAllPostsAction());
    handleClose3();
  };

  const popover = (
    <Popover id="popover-contained">
      <Popover.Header as="h3"></Popover.Header>
      <Popover.Body as="div" className="popoverBody">
        <ul className="popoverul">
          <li
            onClick={() => {
              setShow(false);
              console.log("AAAAAAAAaaa");
            }}
          >
            <div>
              <i class="bi bi-star"></i>
            </div>
            <div>Stick to top</div>
          </li>
          <li>
            <div>
              <i class="bi bi-download"></i>
            </div>
            <div>Save</div>
          </li>
          <li>
            <div>
              <i class="bi bi-clipboard2-check"></i>
            </div>
            <div>Insert this Post</div>
          </li>
          <li onClick={handleShow}>
            <div>
              <i class="bi bi-pencil-fill"></i>
            </div>
            <div>Edit this Post</div>
          </li>
          <li onClick={handleShow3}>
            <div>
              <i class="bi bi-trash3-fill"></i>
            </div>
            <div>Delete this post</div>
          </li>
          <li>
            <div>
              <i class="bi bi-eye-slash-fill"></i>
            </div>
            <div>Who can see this post?</div>
          </li>
          <li>
            <div>
              <i class="bi bi-eye"></i>
            </div>
            <div>Who sees this post?</div>
          </li>
          <li>
            <div>
              <i class="bi bi-question-circle-fill"></i>
            </div>
            <div>Who thinks about this post?</div>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const submitChanges = async () => {
    const formData = new FormData();

    formData.append("post", image);

    const options2 = {
      method: "POST",
      body: formData,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAzMWM5NmRmYjAwMTUyMWE1YmIiLCJpYXQiOjE2NzA4MzYyODAsImV4cCI6MTY3MjA0NTg4MH0.-mjIeGuDeV798UyGFGMsc5ORRw1nL5qqVP2qkCqN7MY",
      },
    };

    try {
      const endpoint = `https://striveschool-api.herokuapp.com/api/posts/${props.post._id}`;
      const response = await fetch(endpoint, options2);
    } catch (error) {
      console.log(error);
    }

    const postInformation = {
      text: document.querySelector("#posttext").value,
    };
    console.log(postInformation);

    const options = {
      method: "PUT",
      body: JSON.stringify(postInformation),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAzMWM5NmRmYjAwMTUyMWE1YmIiLCJpYXQiOjE2NzA4MzYyODAsImV4cCI6MTY3MjA0NTg4MH0.-mjIeGuDeV798UyGFGMsc5ORRw1nL5qqVP2qkCqN7MY",
      },
    };
    try {
      const endpoint = `https://striveschool-api.herokuapp.com/api/posts/${props.post._id}`;
      const response = await fetch(endpoint, options);
      if (response.ok) {
        alert("Post edited successfully");
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
    <div ref={ref}>
      <Modal show={show2} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit a Post</Modal.Title>
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
                </p>
                <Button id="postbutton">
                  <i class="bi bi-globe-asia-australia"></i>
                  <p> Worldwide</p> <i class="bi bi-caret-down-fill"></i>
                </Button>
              </div>
            </div>
          </div>
          <Form>
            <Form.Group controlId="posttext" className="mb-5">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="What do you want to share?"
                defaultValue={props.post.text}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer id="editpostfooter">
          <Form.Group controlId="image" className="editpostimage">
            <label for="fileupload" class="fileuploadlabel">
              <i class="bi bi-image"></i>
              <p> Add image to your post</p>
              <Form.Control
                id="fileupload"
                type="file"
                {...register("file")}
                placeholder="Enter your Job Image"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  document.querySelector("#done").classList.remove("d-none");
                }}
              />
              <i id="done" class="bi bi-check d-none"></i>
            </label>{" "}
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this post like forever?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
          <Button variant="danger" onClick={() => deletePost()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <OverlayTrigger
        ref={(r) => (ref = r)}
        container={ref.current}
        trigger="click"
        placement="bottom"
        overlay={popover}
        rootClose
      >
        <i class="bi bi-three-dots" onClick={handleClick}></i>
      </OverlayTrigger>
    </div>
  );
}
