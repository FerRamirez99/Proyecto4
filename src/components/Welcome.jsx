import { Carousel } from 'react-bootstrap'
import img1 from "../assets/carousel-Img1.jpg"
import img2 from "../assets/carousel-Img2.jpg"
import img3 from "../assets/carousel-Img3.jpg"

const Welcome = () => {
    return (
        <section className='welcome'>
            <Carousel fade>
                <Carousel.Item>
                    <img src={img1} alt="" className='carousel-img'/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} alt="" className='carousel-img'/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} alt="" className='carousel-img'/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Welcome