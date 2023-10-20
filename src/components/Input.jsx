import { Col, Form, FormGroup, Row } from 'react-bootstrap'

export const Input = ({nombre, setNombre, email, setEmail, personas, setPersonas, fecha, setFecha, hora, setHora}) => {
    const currentDate = new Date()
    const formatDate = currentDate.toISOString().split('T')[0];

    return (
        <>
            <Row className="mb-3">
                <FormGroup as={Col}>
                    <Form.Label htmlFor="inputNombre">Nombre:</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputNombre"
                        name="nombre"
                        value={nombre}
                        placeholder="John Doe"
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup as={Col}>
                    <Form.Label htmlFor="inputEmail">Email:</Form.Label>
                    <Form.Control
                        type="email"
                        id="inputEmail"
                        name="email"
                        value={email}
                        placeholder="name@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </FormGroup>
            </Row>
            <Row className="mb-3">
                <FormGroup as={Col}>
                    <Form.Label htmlFor="inputPersonas">N° Personas:</Form.Label>
                    <Form.Control
                        type="number"
                        id="inputPersonas"
                        name="personas"
                        min="1"
                        value={personas}
                        placeholder="4"
                        onChange={(e) => setPersonas(Number(e.target.value))}
                        required
                    />
                </FormGroup>
                <FormGroup as={Col}>
                    <Form.Label htmlFor="inputFecha">Fecha:</Form.Label>
                    <Form.Control
                        type="date"
                        id="inputFecha"
                        data-bs-theme="dark"
                        name="fecha"
                        min={formatDate}
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup as={Col}>
                    <Form.Label htmlFor="inputHora">Hora:</Form.Label>
                    <Form.Select
                        id="inputHora"
                        name="hora"
                        data-bs-theme="dark"
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                        required
                    >
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
                </FormGroup>
            </Row>
        </>
    )
}