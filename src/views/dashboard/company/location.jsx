import { Card, Row, Col } from "react-bootstrap";
import "./company.css";

const Location = () => {
  return (
    <>
      <Card>
        <Row className="p-3">
          <Col md={10}>
            <h5>
              <b>Lokasi</b>
            </h5>
          </Col>
          <Col md={2}>
            <h7>
              <a href="/company">Lihat semua</a>
            </h7>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>20</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Induk</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>3</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Sub Lokasi Level 1
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>1</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Sub Lokasi Level 2
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Location;
