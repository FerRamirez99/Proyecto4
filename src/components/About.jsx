import { Button, Col, Container, Row } from "react-bootstrap"
import img1 from "../assets/welcome-Img.jpg"

const About = () => {
    return (
        <section className="section-About">
            <Container>
                <Row>
                    <Col sm={6}>
                        <img src={img1} alt="" className="about-Img"/>
                    </Col>
                    <Col sm={6}>
                        <h4>Sobre Nosotros</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aliquam autem in mollitia labore quidem deserunt. Fuga molestiae consectetur tempore id sint cupiditate dicta neque. Repellat quod dolorum odio amet.</p>
                        <Button variant="outline-primary">Ver más</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About