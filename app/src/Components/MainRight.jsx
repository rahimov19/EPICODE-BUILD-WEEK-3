import React from "react";
import { Card, Button,  Row, Col } from "react-bootstrap";
import imgUser from "./Images/user.jpg";
import imgLinked from "./Images/logo2.png";
const MainRight = () => {
  return (
    <>
      <Card
        id="right-sidebar"
        className="py-2"
        style={{ borderRadius: "10px" }}
      >
        <span className="d-flex flex-row">
          <Card.Title>Add your feed</Card.Title>

          <i
            className="bi bi-info-square-fill ml-auto my-auto pr-2"
            style={{ color: "gray" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-info-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </i>
        </span>
        <Card.Body id="follow" className="px-2">
          <div className="d-flex flex-row">
            <img src={imgUser} alt="User image" className="mr-2" />
            <span>
              <h5 className="mb-0">Muhammadjon</h5>
              <p>Ethical hacker & Developer</p>
              <Button
                type="button"
                className="btn-connect btn-primary px-2 py-2"
              >
                <i className="bi bi-plus">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
               <span className="follow">Follow</span>
                </i>
              </Button>
            </span>
          </div>
          {/* <div className="d-flex flex-row my-3">
            <img src={imgUser}  className="mr-2" alt="User image" />
            <span>
              <h5 className="mb-0">Muhammadjon</h5>
              <p>Ethical hacker & Developer</p>
              <Button
                type="button"
                className="btn-connect btn-primary px-2 py-2"
              >
                <i className="bi bi-plus fs-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
<span className="follow">Follow</span>
                </i>
              </Button>
            </span>
          </div>
          <div className="d-flex flex-row">
            <img src={imgUser} alt="User image" className="mr-2" />
            <span>
              <h5 className="mb-0">Muhammadjon</h5>
              <p>Ethical hacker & Developer</p>
              <Button
                type="button"
                className="btn-connect btn-primary px-2 py-2"
              >
                <i className="bi bi-plus">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
<span className="follow">Follow</span>
                </i>
              </Button>
            </span>
          </div> */}
        </Card.Body>
        <Card.Footer className="pt-2 pb-0">
          <p>
            View all recommendations
            <i className="bi bi-arrow-right ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </i>
          </p>
        </Card.Footer>
      </Card>
      {/* rightside Navbar */}

      <div id="side-footer" className="text-center mt-3">
        <Row className="right__side__footer">
          <Col xs={12}>
            <a href=""> about </a>
            <a href="" className="mx-2">
              accessibility
            </a>
            <a href=""> help center </a>
          </Col>
          <Col xs={12}>
            <a href=""> privacy & terms</a>
            <a href="" className="mx-2">
              ad choises
            </a>
          </Col>
          <Col xs={12}>
            <a href=""> advertising </a>
            <a href="" className="mx-2">
              business services
            </a>
          </Col>
          <Col xs={12}>
            <a href=""> get the linkedin app </a>
            <a href="" className="mx-2">
              more
            </a>
          </Col>
          <Col xs={12} className="d-flex flex-row mt-3 justify-content-center">
            <img
              src={imgLinked}
              className="mr-2"
              id="linkedin-logo"
              alt="Linked img"
            />

            <p>linkedin corporation &copy; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MainRight;
