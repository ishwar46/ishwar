import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center text-center text-sm-start">
          {/* Logo Section */}
          <Col xs={12} sm={6} className="mb-3 mb-sm-0">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>

          {/* Social Media Section */}
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <h5>Let’s Get Connected!</h5>
            <div className="social-icon d-flex justify-content-center justify-content-sm-end">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon4} alt="Facebook" />
              </a>
            </div>
            <p className="mt-3">© {new Date().getFullYear()} Ishwar. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
