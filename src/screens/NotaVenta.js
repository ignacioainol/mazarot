import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export const NotaVenta = () => {
    return (
        <Container>
            <Form className='small-form'>
                <Form.Group>
                    <Form.Label>Es Cliente?</Form.Label>
                    <Form.Check
                        label="Sí"
                        checked
                        name="group1"
                        type="radio"
                    />
                    <Form.Check
                        label="No"
                        name="group1"
                        type="radio"
                    />
                </Form.Group>

                <Form.Group className="mb-3 ">
                    <Form.Label>Nombre de Fantasía</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Gestor</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Ana María Figueroa</option>
                        <option>Nataly V. Pacheco R.</option>
                        <option>Nelson R. Chaparro M.</option>
                    </Form.Select>
                </Form.Group>

                <Row>

                    <Col>
                        <Form.Group>
                            <Form.Label>Productos</Form.Label>
                            <Form.Select aria-label="Default select example" id="products">
                                <option disabled="" selected="">Seleccione ...</option>
                                <option data-price="100000">Buzo Desechable 1</option>
                                <option data-price="174,966">Convertidor óxido 1 litro</option>
                                <option data-price="4,464">Desengrasante Aguacol 1 litro</option>
                                <option data-price="8,990">Pasta MBK 100 g</option>
                                <option data-price="16,048">Guantes Nitrilo Naranja M</option>
                                <option data-price="16,048">Guantes Nitrilo Naranja L</option>
                                <option data-price="16,048">Guantes Nitrilo Naranja XL</option>
                                <option data-price="10,533">Guante Nitrilo Negro M</option>
                                <option data-price="10,533">Guante Nitrilo Negro L</option>
                                <option data-price="11,817">LKX 2 400 g</option>
                                <option data-price="12,944">LAA 400 ml</option>
                                <option data-price="23,906">MAG 2 500 ml</option>
                                <option data-price="12,460">Lub. Cadenas 400 ml</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="text" disabled id='price' />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control type="number" min="1" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Button style={{ marginTop: '2em' }}>
                            Agregar Producto
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Productos Seleccionados</Form.Label>
                        <Form.Control disabled as="textarea" rows={3} />
                    </Form.Group>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3 ">
                            <Form.Label>Descuento</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3 ">
                            <Form.Label>Tipo de Descuento</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option selected="">%</option>
                                <option>$</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3 ">
                            <Form.Label>Total</Form.Label>
                            <Form.Control disabled type="text" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Forma de Pago</Form.Label>
                            <Form.Select>
                                <option>Contado</option>
                                <option>Crédito 30 días</option>
                                <option>Transferencia</option>
                                <option>Transbank</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Fecha de Pago</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </Container>
    )
}
