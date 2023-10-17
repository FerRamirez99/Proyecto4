import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const BookingDetail = () => {
    return (
        <main className='booking-detail'>
            <Container>
                <h2>Reservas</h2>
                <p>Para reservar una mesa completa el siguiente formulario.</p>
                <Card>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control placeholder="Nombre Apellido" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="ejemplo@gmail.com" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control placeholder="+56912354678" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>N° de personas</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Seleccionar...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Fecha</Form.Label>
                                <Form.Control type='date' />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Hora</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Seleccionar...</option>
                                    <option>11:00</option>
                                    <option>12:00</option>
                                    <option>13:00</option>
                                    <option>14:00</option>
                                    <option>15:00</option>
                                    <option>16:00</option>
                                    <option>17:00</option>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                    <option>21:00</option>
                                    <option>22:00</option>
                                    <option>23:00</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Button variant="primary">Reservar</Button>
                    </Form>
                </Card>
            </Container>
        </main>
    )
}

export default BookingDetail