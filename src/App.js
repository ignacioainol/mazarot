
import { Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import { ChangeLanguaje } from './components/ChangeLanguaje';
import { EnvelopeAt, House, GlobeAmericas, EnvelopePaper, Fire } from 'react-bootstrap-icons';
import { useEffect, useState } from "react";
import { Loading } from './components/Loading';
import { Luubricants } from './screens/Luubricants';
import { Services } from './screens/Services';
import { Contact } from './screens/Contact';
import { Footer } from './components/Footer';
import { Tribologia } from './screens/Tribologia';



function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1400)
  }, [])
  if (loading) {
    return <Loading />
  }
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
          <Navbar expand="lg" className=" bg-white">
            <Container>
              <Link to="/">
                <Navbar.Brand>
                  <img
                    src="/assets/images/logo-mazarot.png"
                    height="100"
                    className="d-inline-block align-top animate__animated animate__bounceInLeft"
                    alt="Mazarot logo"
                  />
                </Navbar.Brand>
              </Link>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto w-100 justify-content-end">
                  <div className='itemsNavbar'>
                    <Link className="nav-link" to='/'><House /> Inicio</Link>
                    <Link className="nav-link" to='/lubricants'><GlobeAmericas /> Lubricantes</Link>
                    <Link className="nav-link" to='/'><Fire /> Servicios</Link>
                    <Link className="nav-link" to='/contact'><EnvelopePaper /> Contacto</Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route>
                <Route path="/lubricants" element={<Luubricants />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/encuesta/tribologia" element={<Tribologia />}></Route>
                <Route path="/" element={<HomeScreen />}></Route>
              </Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
