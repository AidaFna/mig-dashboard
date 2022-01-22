import { Row, Col, Container } from "react-bootstrap";
// import Menu from "../../components/menu";
import Header from "./navbar";
import Profile from "./profile";
import Location from "./location";
import Activities from "./activities";
import Relation from "./relation";
import Bank from "./bank";

const Company = () => {
  return (
    <div className="company mb-5">
      <Container fluid>
        <Row>
          <Col md={12} sm={12}>
            <Header />
          </Col>
          <Col md={12} sm={12}>
            <Row>
              <Col md={3} sm={12}>
                {/* <Profile /> */}
              </Col>
              <Col md={9} sm={12}>
                {/* <Location /> */}
                <Row className="mt-3">
                  <Col md={6}>
                    {/* <Bank />
                    <Relation /> */}
                  </Col>
                  <Col md={6}>{/* <Activities /> */}</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Company;
