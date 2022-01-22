import { Card, Row, Col } from "react-bootstrap";
import "./company.css";

const Relation = () => {
  return (
    <>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Relasi</Card.Title>
          <Card.Subtitle className="mt-5 text-muted"></Card.Subtitle>
          <Row>
            <Col md={2}>
              <h3 className="mt-3">
                <i class="bi bi-share"></i>
              </h3>
            </Col>
            <Col md={10}>
              <h3>20</h3>
              <h7> memiliki</h7>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <h3 className="mt-3">
                <i class="bi bi-share"></i>
              </h3>
            </Col>
            <Col md={10}>
              <h3>108</h3>
              <h7>menggunakan</h7>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <h3 className="mt-3">
                <i class="bi bi-share"></i>
              </h3>
            </Col>
            <Col md={10}>
              <h3>67</h3>
              <h7>meminjam</h7>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Relation;
