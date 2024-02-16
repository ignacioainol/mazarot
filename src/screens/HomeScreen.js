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

            <div className='divisor'></div>

            <div className="considerations">
                <h5>Consideraciones</h5>
                <p>
                    Es evidente que los productos químicos son fundamentales para el desarrollo de las actividades industriales. Actualmente existe una amplia gama de productos especializados, que además de destacar sus propiedades técnicas, destacan su alta toxicidad para el ser humano y los organismos vivos.
                </p>
                <p>
                    Es responsabilidad de las áreas de suministro, mantenimiento, seguridad y medio ambiente mantener y entregar, a cada persona que participa en la cadena de almacenamiento y uso de los productos, la información sobre el correcto almacenamiento y manejo seguro de los mismos.
                </p>
                <p>Lo anterior, con el fin de optimizar el desempeño de los equipos, en sus condiciones de operación y cargas de trabajo, y cuidar la seguridad de las personas, los equipos y el ambiente en el que se desarrolla el proceso productivo.</p>
            </div>
        </>
    )
}
