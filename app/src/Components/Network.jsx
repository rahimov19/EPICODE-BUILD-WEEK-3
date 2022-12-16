import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { guestUserAction } from "../Redux/Actions";

export default function Network() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gotoProfile = (user1) => {
    dispatch(guestUserAction(user1));
    navigate(`/guest/${user1._id}`);
  };
  const user = useSelector((state) => state.user.user);
  const users = useSelector((state) => state.user.users);
  return (
    <Container>
      <Row>
        <Col xs={3} className="mt-4">
          <div className="bgWhite p-3">
            <h5>Configure your network</h5>
            <div className="networkrow">
              <i class="bi bi-people-fill"></i> <p>Connections</p>
              <p>{users.length}</p>
            </div>
            <div className="networkrow">
              <i class="bi bi-journal"></i> <p>Contacts</p>
              <p>{users.length}</p>
            </div>
            <div className="networkrow">
              <i class="bi bi-person-fill"></i> <p>Followers</p>
              <p>{Math.floor(Math.random() * 500)}</p>
            </div>
            <div className="networkrow">
              <i class="bi bi-people-fill"></i> <p>Groups</p>
              <p>{Math.floor(Math.random() * 500)}</p>
            </div>
            <div className="networkrow">
              <i class="bi bi-calendar-date"></i> <p>Events</p>
              <p>{Math.floor(Math.random() * 500)}</p>
            </div>
            <div className="networkrow">
              <i class="bi bi-building"></i> <p>Pages</p>
              <p>{Math.floor(Math.random() * 500)}</p>
            </div>
            <div className="networkrow">
              <i class="bi bi-newspaper"></i> <p>Newsletters</p>
              <p>{Math.floor(Math.random() * 500)}</p>
            </div>
          </div>
          <div className="bgWhite p-3 addcontactsnetwork mt-3">
            <h5>Add contacts</h5>
            <p>
              We'll periodically import and store your contacts to help you and
              others connect. You choose who to connect to and who to invite.
              <span>Learn more...</span>{" "}
            </p>{" "}
            <input type="text" placeholder={user.email} className={"px-2"} />{" "}
            <Button>Continues</Button>
          </div>
        </Col>
        <Col xs={8}>
          <div className="bgWhite d-flex justify-content-between align-items-center px-4 py-2 my-4">
            <p className="py-2 m-0">No new contacts</p>{" "}
            <span className="configurespan">Congirufe</span>
          </div>
          <div className="bgWhite px-3 py-4">
            <div className="d-flex justify-content-between mb-3">
              <h5>People in this area</h5>
              <span>See All</span>
            </div>
            <Row>
              {users ? (
                users.slice(0, 18).map((user1, i) => (
                  <Col xs={4}>
                    <Card style={{ width: "100%" }}>
                      <Card.Img
                        variant="top"
                        className="carduserimg"
                        src={"https://placekitten.com/40" + i}
                      />
                      <Card.Body>
                        <Card.Title
                          className="pt-3 cardtitleuser"
                          onClick={() => gotoProfile(user1)}
                        >
                          <img
                            src={
                              user1.image
                                ? user1.image
                                : "https://placekitten.com/400"
                            }
                            alt={"userimg"}
                            className={"carduserava"}
                          />
                          {user1.name} {user1.surname}
                        </Card.Title>
                        <Card.Text className="cardtextuser">
                          {user1.title}
                          <p className="cardfollowers">
                            {Math.floor(Math.random() * 2000)} Followers
                          </p>
                        </Card.Text>
                        <Button className="cardbuttonuser">Follow</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <div></div>
              )}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
