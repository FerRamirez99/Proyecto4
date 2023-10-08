import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col>
                        <h5>About Us</h5>
                        <a href="#">Aim</a>
                        <a href="#">Vision</a>
                        <a href="#">Testimonials</a>
                    </Col>
                    <Col>
                        <h5>Services</h5>
                        <a href="#">Writing</a>
                        <a href="#">Internships</a>
                        <a href="#">Coding</a>
                        <a href="#">Teaching</a>
                    </Col>
                    <Col>
                        <h5>Contact Us</h5>
                        <a href="#">Uttar Pradesh</a>
                        <a href="#">Ahemdabad</a>
                        <a href="#">Indore</a>
                        <a href="#">Mumbai</a>
                    </Col>
                    <Col>
                        <h5>Social Media</h5>
                        <a href="#">{<FacebookIcon />}</a>
                        <a href="#">{<InstagramIcon />}</a>
                        <a href="#">{<YouTubeIcon />}</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer