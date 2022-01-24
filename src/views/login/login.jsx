import {
  Container,
  Row,
  Col,
  // Spinner
} from "react-bootstrap";
import FormLogin from "./loginForm";
import "./login.css";
const Login = () => {
  return (
    <div className="landing">
      <Container>
        <Row>
          <Col md={8} sm={12}></Col>
          <Col md={4} sm={12}>
            <Row></Row>
            <Row>
              <Col>
                <FormLogin />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
