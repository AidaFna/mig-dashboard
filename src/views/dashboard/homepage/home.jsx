import { Container, Card, Row, Col } from "react-bootstrap";
import Menu from "../../components/menu";
import Header from "./navbar";
import Customers from "./customers";

const Home = () => {
  return (
    <div className="company mb-5">
      <Container fluid>
        <Row>
          <Col md={1}>
            <Menu />
          </Col>
          <Col md={11} className="content">
            <Header />
            <Card className="p-5">
              <h4>Customers</h4>
              <h7>This is a list of data Customers.</h7>
              <Customers />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
