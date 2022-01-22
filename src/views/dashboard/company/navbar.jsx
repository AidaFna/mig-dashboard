import { Navbar, Container, Nav, Image } from "react-bootstrap";
import profile from "../../../assets/profile.png";

const Header = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Nav className="me-auto">
            <Nav.Link>
              Perusahaan {">"} <b>Mitramas Infosys Global</b>
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link>
                <i class="bi bi-search"></i>
              </Nav.Link>
              <Nav.Link>
                <i class="bi bi-bell"></i>
              </Nav.Link>
              <Nav.Link></Nav.Link>
              <Navbar.Text>
                <Image src={profile} height="25px"></Image>
              </Navbar.Text>
              <Nav.Link>John Doe</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
