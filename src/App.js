
import { Col, Container, Form, Row } from 'react-bootstrap';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import { ChangeLanguaje } from './components/ChangeLanguaje';
import { EnvelopeAt } from 'react-bootstrap-icons';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Container className='mt-4'>
            <ChangeLanguaje />
            <Row className='mt-4'>
              <Col>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                  <span className='space-between-item'>
                    <EnvelopeAt /> ingenieria@mazarot.cl
                  </span>
                  <span className='space-between-item'>
                    <EnvelopeAt /> contacto@mazarot.cl
                  </span>
                </div>
              </Col>
            </Row>
          </Container>

        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route>
                <Route path="/" element={<HomeScreen />}></Route>
              </Route>
            </Routes>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
