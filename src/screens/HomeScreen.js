import React from 'react'
import { Carousel } from 'react-bootstrap'

export const HomeScreen = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <div className="carousel-content">
                        <h3>Slide 1</h3>
                        <p>Contenido de la diapositiva 1.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-content">
                        <h3>Slide 2</h3>
                        <p>Contenido de la diapositiva 2.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-content">
                        <h3>Slide 3</h3>
                        <p>Contenido de la diapositiva 3.</p>
                    </div>
                </Carousel.Item>
            </Carousel >
        </>
    )
}
