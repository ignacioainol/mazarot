
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import { ChangeLanguaje } from './components/ChangeLanguaje';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row xs={2} md={4} lg={6}>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row xs={1} md={2}>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row xs="auto">
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <main>
        <Container className="mt-3">
          <Routes>
            <Route>
              <Route path="/" element={<HomeScreen />}></Route>
            </Route>
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
