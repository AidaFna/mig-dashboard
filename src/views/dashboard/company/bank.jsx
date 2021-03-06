import { Card, Row, Col, Image, Button } from "react-bootstrap";
import "./company.css";
import header from "../../../assets/header-company.jpg";

const Bank = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Row className="mt-3">
            <Col md={6}>
              <h5>
                <b>Akun Bank</b>
              </h5>
            </Col>
            <Col md={6} className="mb-5">
              <h7>
                <Button variant="success">
                  <i class="bi bi-plus-lg"></i> Tambah Akun Bank
                </Button>
              </h7>
            </Col>
            <Col md={4}>
              <Image src={header} className="rounded" height="100px"></Image>
            </Col>
            <Col md={6}>
              <h6>Bank KB Bukopin</h6>
              <h7>****08576 - Yusron Taufiq</h7>
              <h7>IDR</h7>
            </Col>
            <Col md={2}>
              <i class="bi bi-pencil"></i> <i class="bi bi-trash"></i>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={4}>
              <Image src={header} className="rounded" height="100px"></Image>
            </Col>
            <Col md={6}>
              <h6>City Bank, NA</h6>
              <h7>****5525 - Si Tampan</h7>
              <h7>USD</h7>
            </Col>
            <Col md={2}>
              <i class="bi bi-pencil"></i> <i class="bi bi-trash"></i>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Bank;
