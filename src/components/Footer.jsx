import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import logo from '../assets/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import './styles.css'


const Footer = () => {
    return (
        <footer>
            <Container>
                <img src={logo} alt="Logo" className="logo"/>
                <p><LocalPhoneIcon /> +56 9 12345678 &emsp; &emsp; &emsp; <EmailIcon /> vitaintavola@gmail.com</p>    
                <hr />
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
            <p className="copy">&copy; Esta es una página ficticia para fines académicos.</p>
        </footer>
    )
}

export default Footer