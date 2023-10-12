import { Button, Col, Container, Row } from "react-bootstrap"
import img1 from "../assets/welcome-Img.jpg"
import { NavLink } from "react-router-dom"

const About = () => {
    return (
        <section className="section-About">
            <Container>
                <Row>
                    <Col sm={6}>
                        <img src={img1} alt="" className="about-Img"/>
                    </Col>
                    <Col sm={6}>
                        <h1>Sobre Nosotros</h1>
                        <p>Te damos la bienvenida a Vita in Tavola, tu destino culinario italiano. Desde 1995, hemos compartido nuestra pasión por la auténtica comida italiana. Creemos en la simplicidad y la calidad, basándonos en ingredientes frescos y recetas tradicionales. Nuestra atmósfera cálida te sumerge en la Toscana, ofreciendo un lugar ideal para cenas románticas, comidas en familia o celebraciones especiales.</p>
                        <NavLink to="/about">
                            <Button variant="outline-primary">Ver más</Button>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About