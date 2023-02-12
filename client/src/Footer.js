import React from "react";
import trebexia_icon from "./trebexia_icon_50x50.png";

import { Navbar, Image, Row, Col, Container } from "react-bootstrap";

function Footer() {
  return (
    <Navbar>
      <Container fluid>
        <Col>
          <Row>
            <Navbar.Brand href="/">
              <a  href="https://github.com/OneShepForward/trebexia"  target="_blank" rel="noreferrer">

              <Image src={trebexia_icon} ></Image>
              </a>
            </Navbar.Brand>
          </Row>
          <Row>
            <p style={{ "color": "white" }} >
              <small><a className="white-link" href="https://github.com/OneShepForward/trebexia" target="_blank" rel="noreferrer" style={{ "textDecoration": "none" }}>© 2023 Morganick Productions</a></small>
            </p>
          </Row>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Footer;
