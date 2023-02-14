import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { RiUser3Fill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";

const MyNav = () => {
  return (
    <>
      <Navbar expand="lg" variant="dark" className="px-4 py-2 " style={{ backgroundColor: "#221f1f" }}>
        <Navbar.Brand href="#home">
          <img src={logo} style={{ width: "100px", height: "58px" }} alt="logo netflix" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold active">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#" className="fs-5 fw-bold text-white">
              <FiSearch />
            </Nav.Link>
            <Nav.Link href="#" className="fw-lighter text-white d-flex" style={{ fontSize: "0.8rem" }}>
              <div className="align-items-center pt-2">KIDS</div>
            </Nav.Link>
            <Nav.Link href="#" className=" fs-5 fw-bold text-white">
              <FaBell />
            </Nav.Link>
            <Nav.Link href="#" className="fs-5 fw-bold text-white">
              <RiUser3Fill />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNav;
