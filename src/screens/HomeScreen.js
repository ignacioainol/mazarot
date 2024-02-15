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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor neque esse. Laborum minima culpa aperiam magni mollitia rem, nesciunt libero inventore praesentium magnam dolorum perferendis repudiandae repellendus explicabo earum.
            </div>
        </>
    )
}
