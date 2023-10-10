import { Card, Container, Row } from 'react-bootstrap'
import img1 from "../assets/placeholder.png"

const Recs = () => {
    return (
        <section className='recs'>
            <Container>
                <h2>Recomendaciones</h2>
                <Row>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.ImgOverlay>
                            <Card.Subtitle >Card title</Card.Subtitle >
                        </Card.ImgOverlay>
                        <Card.Body>
                            <Card.Title>Some quick example</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.ImgOverlay>
                            <Card.Subtitle >Card title</Card.Subtitle >
                        </Card.ImgOverlay>
                        <Card.Body>
                            <Card.Title>Some quick example</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.ImgOverlay>
                            <Card.Subtitle >Card title</Card.Subtitle >
                        </Card.ImgOverlay>
                        <Card.Body>
                            <Card.Title>Some quick example</Card.Title>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </section>
    )
}

export default Recs