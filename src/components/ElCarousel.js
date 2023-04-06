import Carousel from 'react-bootstrap/Carousel';



function ElCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/img/carousel/c1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Que no te la cuenten! Disfrutala vos</h3>
                    <p>Lo mejor esta ahi afuera, esperando te lo vas a perder?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/img/carousel/c2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Frio??? No existis!</h3>
                    <p>Nada va a detener tus ganas de vivir y gozar el invierno</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/img/carousel/c3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Invierno o Verano??</h3>
                    <p>
                        Sea cual sea tu estacion de disfrute, estamos con vos!
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/img/carousel/c4.jpg"
                        alt="four slide"
                    />

                    <Carousel.Caption>
                        <h3>Frio??? No existis!</h3>
                        <p>Nada va a detener tus ganas de vivir y gozar el invierno</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../assets/img/carousel/c5.jpg"
                            alt="Five slide"
                        />

                        <Carousel.Caption>
                            <h3>Frio??? No existis!</h3>
                            <p>Nada va a detener tus ganas de vivir y gozar el invierno</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                );
}

                export default ElCarousel;