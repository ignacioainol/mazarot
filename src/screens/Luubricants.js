import React, { useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { ItemCarousel } from '../components/ItemCarousel'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Lubricants.css'

export const Luubricants = () => {

    useEffect(() => {
        document.title = 'Lubricantes | Mazarot';
    }, [])

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/encuesta/tribologia');
    };

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <ItemCarousel text="Lubricación, Una Solución para Disminuir la Fricción.." />
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarousel text="Tenemos alternativas disponibles en características técnicas, composición y riegos La Correcta Decisión, es Suya." />
                </Carousel.Item>
            </Carousel>

            <div className='divisor'></div>

            <div className="considerations">
                <p>Contamos con grasas y aceites para componentes sometidos a condiciones extremas tales como:</p>
                <ul>
                    <li>Temperatura</li>
                    <li>Carga</li><li>Agua</li>
                    <li>Humedad</li>
                    <li>Corrosión</li>
                    <li>Contaminación</li>
                </ul>
            </div>

            <div className='divisor'>
                <p>Si Requiere mayor información, consulte <Button variant="dark" onClick={handleClick}>Aquí</Button></p>
            </div>
        </>
    )
}
