import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

const Loading = () => {

  return (
    <>
      <Container>
      <Row style={{justifyContent: 'center', alignItems: 'center'}}>
        <h1>Loading...</h1>
      </Row>
      </Container>
    </>
  );
}

export default Loading;
