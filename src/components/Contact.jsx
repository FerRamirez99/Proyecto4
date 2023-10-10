import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import SendIcon from '@mui/icons-material/Send';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <div>
            <Container>
                <h2>Contactanos</h2>
                <Row>
                    <Col>
                        <p><LocalPhoneIcon /> +56 9 12345678</p>
                    </Col>
                    <Col>
                        <p><EmailIcon /> example@example.com</p>
                    </Col>
                </Row>
                <hr />
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Nombre</Form.Label>
                        <Form.Control id="TextInput" placeholder="Nombre Apellido" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button type="submit"><SendIcon /> Enviar</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Contact