import React from 'react'
import {Row, Col} from "react-bootstrap"
import imgLogo from "../Images/logo.png"
const NotificationFooter = () => {
  return (
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
              src={imgLogo}
              className="mr-2"
              id="linkedin-logo"
              alt="Linked img"
            />

            <p>linkedin corporation &copy; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </div>
  )
}

export default NotificationFooter