import React from 'react'
import { Button, Form } from 'react-bootstrap'

export const Contact = () => {
    return (
        <>
            <Form className='small-form'>
                <Form.Group className="mb-3 animate__animated animate__bounceInLeft" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su Nombre" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3 animate__animated animate__bounceInRight" controlId="formBasicPassword">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" placeholder="Teléfono" />
                </Form.Group>

                <Form.Group className="mb-3 animate__animated animate__bounceInRight" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su Email" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}
