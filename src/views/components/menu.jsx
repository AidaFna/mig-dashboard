import React from "react";
import { Row } from "react-bootstrap";

import "./menu.css";

const Menu = () => {
  return (
    <>
      <Row className="menu">
        <h4>
          <i class="bi bi-house-door"></i>
        </h4>
      </Row>
      <Row>
        <h4>
          <i class="bi bi-building"></i>
        </h4>
      </Row>
    </>
  );
};

export default Menu;
