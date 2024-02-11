
import { Col, Container, Form, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import { ChangeLanguaje } from './components/ChangeLanguaje';
import { EnvelopeAt } from 'react-bootstrap-icons';
import { useEffect, useState } from "react";
import { Loading } from './components/Loading';
import { Luubricants } from './screens/Luubricants';
import { Services } from './screens/Services';
import { Contact } from './screens/Contact';



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
                <Navbar.Brand href="#home">
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
                  <Link className="nav-link" to='/'>Inicio</Link>
                  <Link className="nav-link" to='/lubricants'>Lubricantes</Link>
                  <Link className="nav-link" to='/services'>Servicios</Link>
                  <Link className="nav-link" to='/contact'>Contacto</Link>
                  {/* <Nav.Link href="#home">Inicio</Nav.Link>
                  <Nav.Link href="#link">Lubricantes</Nav.Link>
                  <Nav.Link href="#link">Servicios</Nav.Link>
                  <Nav.Link href="#link">Contactos</Nav.Link> */}
                  {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown> */}
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
