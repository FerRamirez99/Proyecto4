import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import logo from '../../assets/logo.png'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <footer>
            <Container>
                <img src={logo} alt="Logo" className="logo"/>
                <p><LocalPhoneIcon /> +56 9 12345678 &emsp; &emsp; &emsp; <EmailIcon /> vitaintavola@gmail.com</p>    
                <hr />
               <Row>
                    <Col>
                        <NavLink to="/home">Inicio</NavLink>
                        <NavLink to="/about">Sobre Nosotros</NavLink>
                        <NavLink to="/menu">Menú</NavLink>
                        <NavLink to="/booking">Reserva</NavLink>
                    </Col>                    
                </Row>
                <Row>
                    <Col className="socials">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">{<FacebookIcon />}</a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">{<InstagramIcon />}</a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">{<YouTubeIcon />}</a>
                    </Col>
                </Row>
            </Container>
            <p className="copy">&copy; Esta es una página ficticia para fines académicos.</p>
        </footer>
    )
}

export default Footer