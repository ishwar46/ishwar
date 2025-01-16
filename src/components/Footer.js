import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon3.svg";
import '../css/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center text-center text-sm-start">
          {/* Logo and Name Section */}
          <Col xs={12} sm={6} className="mb-3 mb-sm-0 d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-start">
            <h4 className="footer-name mb-2 mb-sm-0">Ishwar Chaudhary</h4>
            <span className="footer-tagline ms-sm-3">Crafting Digital Experiences</span>
          </Col>

          {/* Social Media Section */}
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <h5 className="footer-title">Let’s Get Connected!</h5>
            <div className="social-icon d-flex justify-content-center justify-content-sm-end">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={navIcon3} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={navIcon4} alt="Facebook" />
              </a>
            </div>
            <p className="footer-rights mt-3">© {new Date().getFullYear()} Ishwar. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
