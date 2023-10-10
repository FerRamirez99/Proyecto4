import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './styles.css'


const Footer = () => {
    return (
        <footer>
            <Container>
                <h3>TITLE</h3>
                <Row>
                    <Col>
                        <a href="#">Inicio</a>
                        <a href="#">Sobre Nosotros</a>
                        <a href="#">Menu</a>
                        <a href="#">Contacto</a>
                    </Col>                    
                </Row>
                <Row>
                    <Col className="socials">
                        <a href="">{<FacebookIcon />}</a>
                        <a href="">{<InstagramIcon />}</a>
                        <a href="">{<YouTubeIcon />}</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer