import { Container, Row, Col, Image, Form } from "react-bootstrap";
import React from "react";
import imgLogo from "./Images/logo2.png";
const FooterPart = () => {
  return (
    <Container id="footer" className="">
      <Row>
        <p></p>
        <Image src={imgLogo} alt="Linked Logo" />
      </Row>
      <Col xs={12} md={10}>
        <Row>
          <div className="mr-3">
            <Col xs={12} md={6} lg={3}>
              <a href="">about</a>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <a href="">community guidlines</a>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <a href="">privacy & terms</a>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <a href="">sales solutions</a>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <a href="">safety center</a>
            </Col>
          </div>
          <div className="mr-3">
            <Col xs={12} md={6} lg={3}>
              <a href="">accecibility</a>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <a href="">careers</a>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <a href="">ad choices</a>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <a href="">mobile</a>
            </Col>
          </div>
          <div className="mr-3">
            <Col xs={12} md={6} lg={3}>
              <a href="">telent solutions</a>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <a href="">marketing solutions</a>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <a href="">advetising</a>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <a href="">small business</a>
            </Col>
          </div>

          <div id="footer-settings" className="mr-3">
            <Col xs={12} md={6} lg={3} className="d-flex flex-row">
              <i class="bi bi-question-circle-fill mx-0 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-question-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
              </i>
              <div className="ml-2">
                <a href=""> questions? </a>
                <p> visit our help center. </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className="d-flex flex-row">
              <i class="bi bi-gear-fill mx-0 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gear-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
              </i>
              <div className="ml-2">
                <a href=""> manage your account and privacy </a>
                <p> go to your settings. </p>
              </div>
            </Col>
          </div>
          <div>
            <Col xs={12} md={6} lg={3}>
              <Form>
                <Form.Group controlId="languages">
                  <Form.Label>Selecet language</Form.Label>
                  <Form.Control as="select">
                    <option>English(English)</option>
                    <option>Russian(Russian)</option>
                    <option>Polski(Polish)</option>
                    <option>Uzbek(Uzbek)</option>
                    <option>Italiano(Italian)</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </div>
        </Row>
        <Row>
          <Col className="mt-4">
            <p>Linked corporations &copy; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default FooterPart;
