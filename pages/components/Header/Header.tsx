import { Col, Container, Row } from "reactstrap";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col>1</Col>
          <Col>
            <Image
             src="http://opencart.templatemela.com/OPC08/OPC080193/OPC1/image/catalog/logo.png" 
             alt="abc"
             />
        </Col>
          <Col></Col>
        </Row>
      </Container>
    </header>
  );
};
