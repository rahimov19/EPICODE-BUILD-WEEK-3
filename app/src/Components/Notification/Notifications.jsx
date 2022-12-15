import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SecondNotification from "./SecondNotification";

import NotificationFooter from "./NotificationFooter";
import { Link } from "react-router-dom";

const Notifications = () => {
  const [notification, setNotification] = useState([]);
  const fetchingData = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4MzAzNTQwNWJkYTAwMTUwOTE4NDAiLCJpYXQiOjE2NzA5MTgxOTcsImV4cCI6MTY3MjEyNzc5N30.3Ioocf2mosK7X_9xleOCa66Deo_OvP1I7pNBTw7Qrko`,
          },
        }
      );
      if (res.ok) {
        let userProfile = await res.json();
        setNotification(userProfile);
        console.log(notification.name);
      } else {
        console.log("Something goes wrong while fetching the data");
      }
    } catch (err) {
      console.log("error connecting to the server");
    }
  };

  useEffect(() => {
    fetchingData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container className="main_noti">
        <Row className="row">
          <Col xs={3} className="mt-2 ">
            <Card className="mt-3" style={{ borderRadius: "0.6rem" }}>
              <Card.Body className="side__notification">
                <Card.Text className="">Manage your</Card.Text>
                <Card.Text className="">Notifications</Card.Text>
                <Link to="/" className="">
                  View settings
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} className="mt-4 ">
            <SecondNotification profiles={notification} />
          </Col>

          <Col xs={3} className="mt-4 pt-1 ">
            <NotificationFooter />
          </Col>
        </Row>
      </Container>
    
    </>
  );
};
export default Notifications;
