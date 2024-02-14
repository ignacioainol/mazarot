import React from 'react'
import { Carousel } from 'react-bootstrap'
import { ItemCarousel } from '../components/ItemCarousel'

export const HomeScreen = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <ItemCarousel text="Somos una sociedad de personas que  &#160;se dedican al desarrollo sustentable de ambientes productivos e industriales." />
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarousel text="Un equipo dinámico, capaz de intervenir en procesos de mantención preventiva" />
                </Carousel.Item>
                <Carousel.Item>
                    <ItemCarousel text="Somos especialistas en soluciones efectivas y prácticas. Buscando, mediante razonamiento lógico, soluciones a corto, mediano y largo plazo." />
                </Carousel.Item>
            </Carousel>
            {/* <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://placehold.jp/24/212121/000000/900x300.png?text=&nbsp;"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <h5>First slide label 1</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </>
    )
}
