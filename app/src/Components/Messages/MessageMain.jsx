import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MessageMiddle from "./MessageMiddle";

const MessageMain = () => {
  const profiles = useSelector((state) => state.user.users);

  return (
    <div className="profile-sub-section mt-0 container message-list">
      <Row className="pt-3 pb-0">
        <Col xs="8">
          <p className="pl-3">Messaging</p>
        </Col>
        <Col xs={4} className="  d-flex align-items-center cardWidth">
          <i class="bi bi-three-dots"></i>
          <i class="bi bi-pencil-square"></i>
        </Col>
      </Row>
      <Row>
        <Col>
          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <input type="text" class="form-control" placeholder="Search" />
          </div>
        </Col>
      </Row>
      <Row className="p-3 mt-0 rowMessage">
        {profiles &&
          profiles.slice(0, 10).map(({ _id, image, name, surname, title }) => (
            <Col xs="12 Usersleft" key={_id}>
              <MessageMiddle
                _id={_id}
                image={image}
                name={name}
                surname={surname}
                title={title}
              />
              <p className="hour">4h</p>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default MessageMain;
