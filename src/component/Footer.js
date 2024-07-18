import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
        <Container>
          <span className="text-muted">Place sticky footer content here.</span>
        </Container>
      </footer>
    );
}
export default Footer;