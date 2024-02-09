import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export const ChangeLanguaje = () => {
    return (
        <>
            <Row>
                <Col>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                        <span className='flag'>
                            <img src="./assets/images/chile.png" alt="chile_flag" />
                        </span>
                        <Form>
                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                            />
                        </Form>

                        <span className='flag'>
                            <img src="./assets/images/uk.png" alt="chile_flag" />
                        </span>
                    </div>
                </Col>
            </Row>
        </>
    )
}
