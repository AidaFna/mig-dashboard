import React from "react";
import { Row, Col } from "react-bootstrap";

import "./menu.css";

const Menu = () => {
  return (
    <>
      <Row className="menu">
        <Col md={12} className="mb-5 mt-5">
          MENU
        </Col>
        <Col md={12}>
          <h4>
            <a href="/home">
              <i class="bi bi-house-door"></i>
            </a>
          </h4>
        </Col>
        <Col md={12}>
          <h4>
            <a href="/company">
              <i class="bi bi-building"></i>
            </a>
          </h4>
        </Col>
        <Col md={12}></Col>
        <Col md={12}></Col>
        <Col md={12}></Col>
        <Col md={12}></Col>
        <Col md={12}></Col>
        <Col md={12}></Col>
        <Col md={12}></Col>
        <Col md={12}></Col>
        <Col md={12}></Col>
      </Row>
    </>
  );
};

export default Menu;
