/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import { fetchAllUserAction, fetchUserAction } from "../Redux/Actions";

import { useDispatch } from "react-redux";
import MainMiddle from "./MainMiddle";

export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserAction());
    dispatch(fetchAllUserAction());
  }, []);

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col xs={3}>
            <MainLeft />
          </Col>
          <Col xs={6}>
            <MainMiddle />
          </Col>
          <Col xs={3}>
            <MainRight />
          </Col>
        </Row>
      </Container>
    </>
  );
}
