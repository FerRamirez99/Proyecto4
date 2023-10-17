import { Button, Card, Container } from "react-bootstrap"
import img1 from '../assets/booking.jpg'
import { NavLink } from "react-router-dom"


const Booking = () => {
    return (
        <section className="booking">
            <Container>
                <Card className="text-white">
                    <Card.Img variant="top" src={img1} />
                    <Card.ImgOverlay>
                        <Card.Title >¿Quieres reservar una mesa?</Card.Title >
                        <NavLink to="/booking">
                            <Button variant="outline-primary">Reservar</Button>
                        </NavLink>
                    </Card.ImgOverlay>
                </Card>
            </Container>
        </section>
    )
}

export default Booking