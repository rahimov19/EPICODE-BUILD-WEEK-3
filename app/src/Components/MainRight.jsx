import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { guestUserAction } from "../Redux/Actions";

const MainRight = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function guestPage(profile) {
    dispatch(guestUserAction(profile, profile._id));
    navigate("/guest/" + profile._id);
  }
  const users = useSelector((state) => state.user.users);

  return (
    <>
      <Card id="right-sidebar" className="p-2" style={{ borderRadius: "10px" }}>
        <span className="d-flex flex-row">
          <Card.Title>Add your feed</Card.Title>

          <i
            className="bi bi-info-square-fill ml-auto my-auto pr-2"
            style={{ color: "gray" }}
          ></i>
        </span>
        <Card.Body id="follow" className="px-2">
          <Col xs={12} className={"othersCol"}>
            {users[0] ? (
              <div className="otherUsers">
                {users.slice(0, 3).map((profile) => (
                  <div>
                    <div className="othersOnMain">
                      <img
                        src={profile.image}
                        alt="others"
                        className="otherUsersPic2"
                      />
                      {/* <div className="otherUsersPic2"></div> */}
                      <div
                        className="otherUserData2"
                        key={profile._id}
                        onClick={() => guestPage(profile, profile._id)}
                      >
                        <div className="usersandbutton">
                          <div className="otherUsersDesc2">
                            <p>
                              {profile.name} {profile.surname}
                            </p>
                            <p>{profile.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      type="button"
                      className="btn-connect btn-primary mb-3"
                    >
                      <i class="bi bi-plus-lg"></i>Follow
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <h5>Some Users</h5>
            )}
          </Col>
        </Card.Body>
        <Card.Footer className="pt-2 pb-0">
          <p>
            View all recommendations
            <i className="bi bi-arrow-right ml-2"></i>
          </p>
        </Card.Footer>
      </Card>

      <div id="side-footer" className="text-center mt-3">
        <Row className="right__side__footer">
          <Col xs={12}>
            <a href="/"> about </a>
            <a href="/" className="mx-2">
              accessibility
            </a>
            <a href="/"> help center </a>
          </Col>
          <Col xs={12}>
            <a href="/"> privacy & terms</a>
            <a href="/" className="mx-2">
              ad choises
            </a>
          </Col>
          <Col xs={12}>
            <a href="/"> advertising </a>
            <a href="/" className="mx-2">
              business services
            </a>
          </Col>
          <Col xs={12}>
            <a href="/"> get the linkedin app </a>
            <a href="/" className="mx-2">
              more
            </a>
          </Col>
          <Col xs={12} className="d-flex flex-row mt-3 justify-content-center">
            <img
              src="./Images/logo2.png"
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
