/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { guestUserAction, fetchExperienceAction } from "../Redux/Actions";
import { useNavigate } from "react-router-dom";
import EditUser from "./EditUser";
import FooterPart from "./FooterPart";
import ExperienceUser from "./ExperienceUser";
import PostsUser from "./PostsUser";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const users = useSelector((state) => state.user.users);

  function guestPage(profile) {
    dispatch(guestUserAction(profile, profile._id));
    navigate("/guest/" + profile._id);
  }
  useEffect(() => {
    dispatch(fetchExperienceAction(user._id));
  }, []);
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
              <img src={user.image} alt={user} id="ava" />
              <div>
                <EditUser />
              </div>
            </div>
            <Row className="bgWhite" id="mainrow">
              <Col xs={9} id="userName" className="pl-5 ">
                <h3>
                  {user.name} {user.surname}
                </h3>
                <h5>{user.title}</h5>
                <p>{user.area}</p>
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
                  <p>{user.bio}</p>
                </div>
              </Col>
              <Col xs={11} className={"ml-5 mt-5"}>
                <ExperienceUser />
                <PostsUser user={user} />
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
                  {users[0] ? (
                    <div className="otherUsers">
                      {users.slice(0, 5).map((profile) => (
                        <>
                          <div
                            className="otherUserData"
                            key={profile._id}
                            onClick={() => guestPage(profile, profile._id)}
                          >
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
      <FooterPart />
    </>
  );
}
