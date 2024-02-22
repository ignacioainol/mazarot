import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export const NotaVenta = () => {
  const [showContent, setShowContent] = useState(false);
  const [fantasyName, setFantasyName] = useState('');
  const [selectedGestor, setSelectedGestor] = useState('1');
  const [price, setPrice] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [total, setTotal] = useState(0);
  const [selectedProductsList, setSelectedProductsList] = useState([]);
  const [qty, setQty] = useState('');
  const [subTotal, setSubTotal] = useState(0);
  const [valueDiscount, setValueDiscount] = useState(0);

  const [selectedProduct, setSelectedProduct] = useState('unselected');

  const handleRadioChange = (e) => {
    setShowContent(e.target.value === 'yes');
  };

  const handleFantasyNameChange = (event) => {
    setFantasyName(event.target.value);
  };

  const handleSelectGestorChange = (e) => {
    setSelectedGestor(e.target.value);
  };

  const handleSelectProductChange = (e) => {
    const selectedPrice = e.target.options[e.target.selectedIndex].getAttribute('data-price');
    setPrice(selectedPrice);
    setQty(1);
    setSubTotal(selectedPrice);
    setSelectedProduct(e.target.value);
    console.log(qty === '' ? true : false);
    setIsDisabled(e.target.value === 'unselected' ? true : false);
  };

  const handleSetDiscount = (e) => {
    console.log(e)
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/\D/g, '');
    setValueDiscount(inputValue);
  }

  const handleAddProduct = (e) => {
    if (selectedProduct !== 'unselected') {
      const newProduct = {
        name: selectedProduct,
        quantity: qty,
        subtotal: parseFloat(subTotal), // Convertir a número
      };
      setSelectedProductsList([...selectedProductsList, newProduct]);
      setQty('');
      setSelectedProduct('unselected');
      setPrice('');
      setIsDisabled(true);
      const newTotal = total + parseFloat(subTotal); // Convertir a número
      setTotal(newTotal);
      setSubTotal(0); // Establecer subtotal a 0
    }
  };

  const handleCheckValueDiscount = (e) => {
    console.log(e.target.value)
  }

  const handleTypeDiscount = (e) => {
    const discountType = e.target.value;

    if (discountType === 'percent') {
      // Calcular el descuento en porcentaje
      const percentDiscount = (parseFloat(valueDiscount) / 100) * total;
      const newTotal = total - percentDiscount;
      setTotal(Math.floor(newTotal));
    }

    if (discountType === 'clp') {
      // Calcular el descuento en cantidad fija
      const clpDiscount = parseFloat(valueDiscount);
      const newTotal = total - clpDiscount;
      setTotal(Math.floor(newTotal));
    }
  }

  const handleChangeQty = (e) => {
    const priceCleaned = price.replace(',', '');
    const subTotal = e.target.value * priceCleaned;
    setSubTotal(subTotal);
    setQty(e.target.value);
    console.log(selectedProductsList.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let gestorName = '';
    switch (selectedGestor) {
      case '1':
        gestorName = 'Ana María Figueroa';
        break;
      case '2':
        gestorName = 'Nataly V. Pacheco R.';
        break;
      case '3':
        gestorName = 'Nelson R. Chaparro M.';
        break;
      default:
        break;
    }

    console.log('Nombre del gestor:', gestorName);
    console.log('Nombre fantasy:', fantasyName);
  };

  return (
    <Container>
      <Form className="small-form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Es Cliente?</Form.Label>
          <Form.Check
            label="Sí"
            defaultChecked
            value="no"
            name="group1"
            type="radio"
            onChange={handleRadioChange}
          />
          <Form.Check
            label="No"
            value="yes"
            name="group1"
            type="radio"
            onChange={handleRadioChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Form.Label>Nombre de Fantasía</Form.Label>
          <Form.Control
            onChange={handleFantasyNameChange}
            value={fantasyName}
            type="text"
          />
        </Form.Group>

        {showContent && (
          <>
            <Form.Group className="mb-3 ">
              <Form.Label>Razon Social</Form.Label>
              <Form.Control type="text" name="socialReason" />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label>Rut</Form.Label>
              <Form.Control type="text" name="rut" />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" name="direction" />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control type="text" name="city" />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="text" name="email" />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label>Persona de Contacto</Form.Label>
              <Form.Control type="text" name="contactPerson" />
            </Form.Group>
          </>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Gestor</Form.Label>
          <Form.Select
            value={selectedGestor}
            onChange={handleSelectGestorChange}
          >
            <option value="1">Ana María Figueroa</option>
            <option value="2">Nataly V. Pacheco R.</option>
            <option value="3">Nelson R. Chaparro M.</option>
          </Form.Select>
        </Form.Group>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Productos</Form.Label>
              <Form.Select
                value={selectedProduct}
                onChange={handleSelectProductChange}
              >
                <option value="unselected" disabled>
                  Seleccione ...
                </option>
                <option value="Buzo Desechable 1" data-price="3681">
                  Buzo Desechable 1
                </option>
                <option value="Convertidor óxido 1 litro" data-price="174966">
                  Convertidor óxido 1 litro
                </option>
                <option value="Desengrasante Aguacol 1 litro" data-price="4464">
                  Desengrasante Aguacol 1 litro
                </option>
                <option value="Pasta MBK 100 g" data-price="8990">
                  Pasta MBK 100 g
                </option>
                <option value="Guantes Nitrilo Naranja M" data-price="16048">
                  Guantes Nitrilo Naranja M
                </option>
                <option value="Guantes Nitrilo Naranja L" data-price="16048">
                  Guantes Nitrilo Naranja L
                </option>
                <option value="Guantes Nitrilo Naranja XL" data-price="16048">
                  Guantes Nitrilo Naranja XL
                </option>
                <option value="Guante Nitrilo Negro M" data-price="10533">
                  Guante Nitrilo Negro M
                </option>
                <option value="Guante Nitrilo Negro L" data-price="10533">
                  Guante Nitrilo Negro L
                </option>
                <option value="LKX 2 400 g" data-price="11817">
                  LKX 2 400 g
                </option>
                <option value="LAA 400 ml" data-price="12944">
                  LAA 400 ml
                </option>
                <option value="MAG 2 500 ml" data-price="23906">
                  MAG 2 500 ml
                </option>
                <option value="Lub. Cadenas 400 ml" data-price="12460">
                  Lub. Cadenas 400 ml
                </option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                disabled
                value={price}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                onChange={handleChangeQty}
                disabled={isDisabled}
                value={qty}
                type="number"
                min="1"
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label>Sub Total</Form.Label>
              <Form.Control disabled value={subTotal} type="text" />
            </Form.Group>
          </Col>

          <Col>
            <Button onClick={handleAddProduct} style={{ marginTop: '2em' }}>
              Agregar Producto
            </Button>
          </Col>
        </Row>

        <Row>
          <Form.Group
            className="mb-3 mt-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Productos Seleccionados</Form.Label>
            <Form.Control
              disabled
              as="textarea"
              value={selectedProductsList
                .map((product) => `${product.name}: ${product.quantity}`)
                .join('\n')}
              rows={3}
            />
          </Form.Group>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3 ">
              <Form.Label>Descuento</Form.Label>
              <Form.Control
                disabled={total === 0 ? true : false}
                type="text"
                value={valueDiscount}
                onClick={handleCheckValueDiscount}
                onChange={handleSetDiscount} />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3 ">
              <Form.Label>Tipo de Descuento</Form.Label>
              <Form.Select
                disabled={(valueDiscount === 0 || valueDiscount === '') ? true : false}
                onChange={handleTypeDiscount}
                defaultValue="" aria-label="Default select example">
                <option value="" disabled>Seleccione...</option>
                <option value="percent">%</option>
                <option value="clp">$</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3 ">
              <Form.Label>Total</Form.Label>
              <Form.Control
                value={total}
                disabled
                type="text"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Forma de Pago</Form.Label>
              {/* <Form.Select>
                                <option>Contado</option>
                                <option>Crédito 30 días</option>
                                <option>Transferencia</option>
                                <option>Transbank</option>
                            </Form.Select> */}
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
  );
};
