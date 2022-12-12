import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function AnotherUser() {
  const guest = useSelector((state) => state.user.guest);
  const users = useSelector((state) => state.user.users);

  return (
    <>
      <Container id="main">
        <Row>
          <Col xs={9}>
            <div id="images">
              <img
                src={"http://placekitten.com/1500/600"}
                alt={"cover"}
                id="cover"
              ></img>
              <img src={guest.image} alt={guest} id="ava" />
            </div>
            <Row className="bgWhite" id="mainrow">
              <Col xs={9} id="userName" className="pl-5 ">
                <h3>
                  {guest.name} {guest.surname}
                </h3>
                <h5>{guest.title}</h5>
                <p>{guest.area}</p>
                <div id="userbuttons">
                  <Button id="userbutton1"> Interested </Button>
                  <Button id="userbutton2"> Add something to profile </Button>
                  <Button id="userbutton3"> More </Button>
                </div>
              </Col>
              <Col xs={3} id="companiesCol">
                <div className="companies">
                  <img src="http://placekitten.com/300" alt="company"></img>{" "}
                  <p>SOME BIG COMPANY</p>
                </div>
                <div className="companies">
                  <img src="http://placekitten.com/300" alt="company"></img>{" "}
                  <p>SOME small COMPANY</p>
                </div>
              </Col>
              <Col xs={12} className={"ml-5 mt-5"}>
                <div>
                  <h5>Main Information</h5>
                  <p>{guest.bio}</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={3} className="bgWhite">
            <div className="mt-4 rightpart ">
              <Row className="mb-3  ">
                <Col xs={10}>
                  <h5>Change some of data </h5>
                </Col>
                <Col xs={2} className={"iconquestionmark"}>
                  <i className="bi bi-question-circle-fill"></i>
                </Col>
              </Row>
              <hr className="hr"></hr>
              <Row>
                <Col xs={10}>
                  <h5>Make your page another </h5>
                </Col>
                <Col xs={2} className={"iconquestionmark"}>
                  <i className="bi bi-question-circle-fill"></i>
                </Col>
                <Col xs={12} className={"othersCol"}>
                  <h3 className="mb-3">Check others</h3>
                  {users[0].name ? (
                    <div className="otherUsers">
                      {users.slice(0, 5).map((profile) => (
                        <>
                          <div className="otherUserData">
                            <div className="otherUsersPic">
                              <img src={profile.image} alt="others" />
                            </div>
                            <div className="otherUsersDesc">
                              <p>
                                {profile.name} {profile.surname}
                              </p>
                              <p>{profile.title}</p>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  ) : (
                    <h5>Some Users</h5>
                  )}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
