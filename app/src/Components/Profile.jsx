/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
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
  const [userxp, setuserxp] = useState();

  const user = useSelector((state) => state.user.user);
  const users = useSelector((state) => state.user.users);

  function guestPage(profile) {
    dispatch(guestUserAction(profile, profile._id));
    navigate("/guest/" + profile._id);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(fetchExperienceAction(user._id));
  }, []);

  useEffect(() => {
    fetchXp();
  }, []);

  const fetchXp = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAzMWM5NmRmYjAwMTUyMWE1YmIiLCJpYXQiOjE2NzA4MzYyODAsImV4cCI6MTY3MjA0NTg4MH0.-mjIeGuDeV798UyGFGMsc5ORRw1nL5qqVP2qkCqN7MY",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        setuserxp(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <Row id="mainrow">
              <div className="bgWhite d-flex w-100 pb-4">
                <Col xs={8} id="userName" className="pl-5">
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
                <Col xs={4} id="companiesCol">
                  {userxp ? (
                    userxp.slice(0, 2).map((xp) => (
                      <>
                        <div className="companies">
                          <img
                            src={
                              xp.image ? xp.image : "http://placekitten.com/300"
                            }
                            alt="company"
                          ></img>{" "}
                          <div className="w-100">
                            <p className="m-0">
                              <b>{xp.company}</b>
                            </p>
                            <p className="m-0">{xp.role}</p>
                          </div>
                        </div>
                      </>
                    ))
                  ) : (
                    <h5>User works nowhere</h5>
                  )}
                </Col>
              </div>
              <Col xs={12} className={"p-0 mt-2"}>
                <div className="bgWhite px-4 py-3 w-100">
                  <h5 className="pl-3">Main Information</h5>
                  <p className="pl-3 mb-2">{user.bio}</p>
                </div>
              </Col>
              <Col xs={12} className={"mt-3"}>
                <ExperienceUser />
                <PostsUser user={user} />
              </Col>
            </Row>
          </Col>
          <Col xs={3} className="bgWhite h-100 pb-3 ">
            <div className="mt-4 rightpart px-2 ">
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
                <Col xs={12} className={"othersCol px-3"}>
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
