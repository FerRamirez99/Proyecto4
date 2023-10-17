import { Button, Card, Container } from "react-bootstrap"
import img1 from '../assets/menu-bg.jpg'
import { NavLink } from "react-router-dom"

const Menu = () => {
    return (
        <section className='menu'>
            <Container>
                <Card className="bg-dark text-white text-center" >
                    <Card.Img src={img1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>¡Revisa nuestro menú!</Card.Title>
                        <NavLink to="/menu">
                            <Button variant="outline-primary">Ver Menú</Button>
                        </NavLink>
                    </Card.ImgOverlay>
                </Card>
            </Container>
        </section>
    )
}

export default Menu