import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center py-3">Copyright &copy; MERN SHOP</Col>
      </Row>
    </Container>
  );
};

export default Footer;
