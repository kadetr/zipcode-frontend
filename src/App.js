import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

import SearchBox from "./components/SearchBox";

function App() {
    
  return (
    <Container >
      <Row className='justify-content-md-center'>
        <Col >
          <SearchBox />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
