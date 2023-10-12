import { Carousel } from 'react-bootstrap'
import img1 from "../assets/carousel-Img1.jpg"
import img2 from "../assets/carousel-Img2.jpg"
import img3 from "../assets/carousel-Img3.jpg"

const Welcome = () => {
    return (
        <section className='welcome'>
            <Carousel fade>
                <Carousel.Item>
                    <img src={img1} alt="" className='carousel-img' />
                    <Carousel.Caption>
                        <h1>Vita in Tavola</h1>
                        <h5>La mejor alternativa de comida italiana.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} alt="" className='carousel-img' />
                    <Carousel.Caption>
                        <h1>Vita in Tavola</h1>
                        <h5>La mejor alternativa de comida italiana.</h5>                   
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} alt="" className='carousel-img' />
                    <Carousel.Caption>
                        <h1>Vita in Tavola</h1>
                        <h5>La mejor alternativa de comida italiana.</h5>                    
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Welcome