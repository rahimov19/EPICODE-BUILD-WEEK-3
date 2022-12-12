/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import { saveUserAction, saveUsersAction } from "../Redux/Actions";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import MainMiddle from "./MainMiddle";

export default function MainPage() {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUser();
    fetchAllUsers();
  }, []);

  async function fetchAllUsers() {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAzMWM5NmRmYjAwMTUyMWE1YmIiLCJpYXQiOjE2NzA4MzYyODAsImV4cCI6MTY3MjA0NTg4MH0.-mjIeGuDeV798UyGFGMsc5ORRw1nL5qqVP2qkCqN7MY",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        dispatch(saveUsersAction(data));
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchUser() {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjAzMWM5NmRmYjAwMTUyMWE1YmIiLCJpYXQiOjE2NzA4MzYyODAsImV4cCI6MTY3MjA0NTg4MH0.-mjIeGuDeV798UyGFGMsc5ORRw1nL5qqVP2qkCqN7MY",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        dispatch(saveUserAction(data));
        console.log(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  }
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
