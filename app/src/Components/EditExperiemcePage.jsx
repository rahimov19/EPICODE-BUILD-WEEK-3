import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { guestUserAction } from "../Redux/Actions";

import { format } from "date-fns";
import FooterPart from "./FooterPart";
import AddExperience from "./AddExperience";
import EditExperience from "./EditExperience";

export default function EditExperiemcePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const experienceList = useSelector((state) => state.experience.experience);
  const users = useSelector((state) => state.user.users);
  function guestPage(profile) {
    dispatch(guestUserAction(profile, profile._id));
    navigate("/guest/" + profile._id);
  }

  return (
    <>
      <Container className="xpContainer">
        <Row>
          <Col xs={8} className="xpCol">
            <div className="xpTop">
              <i className="bi bi-arrow-left" onClick={() => navigate(-1)}></i>
              <h4 className="mr-auto ml-2">Work Experience</h4>
              <AddExperience />
            </div>
            <div>
              {experienceList[0] ? (
                experienceList.map((xp) => (
                  <div className="experienceDiv">
                    <div className="experienceDivImg mr-3">
                      <img
                        src={"http://placekitten.com/400"}
                        alt={"experience company img"}
                      />
                    </div>
                    <Row className="xpRow">
                      <div className="experienceDivInfo">
                        <h5>{xp.role}</h5>
                        <h6>{xp.company}</h6>
                        <p>
                          {format(new Date(xp.startDate), "MMMM yyyy")} -{" "}
                          {format(new Date(xp.endDate), "MMMM yyyy")} 4m
                        </p>
                        <p>{xp.area}</p>
                        <p className="experienceDivInfoLast">
                          {xp.description}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <EditExperience xp={xp} />
                      </div>
                    </Row>
                  </div>
                ))
              ) : (
                <div>No experience to show</div>
              )}
            </div>
          </Col>
          <Col xs={3} className="xpCol">
            <h3 className="mb-3">Check others</h3>
            {users[0] ? (
              <div className="otherUsers">
                {users.slice(0, 10).map((profile) => (
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
      </Container>
      <FooterPart />
    </>
  );
}
