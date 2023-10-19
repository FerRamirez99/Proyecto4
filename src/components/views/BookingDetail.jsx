import { Button, Col, Container, Form, FormGroup, Row, Table } from "react-bootstrap"
import { db } from "../../config/Firebase"
import { useEffect, useState } from "react"
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"


const BookingDetail = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [personas, setPersonas] = useState('')
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [id, setId] = useState('')

    const [show, setShow] = useState(false)

    const [val, setVal] = useState([])

    //Ref coleccion
    const dbName = collection(db, 'reservas')

    useEffect(() => {
        const getData = async () => {
            const dbVal = await getDocs(dbName)
            //! Traer elementos
            setVal(dbVal.docs.map((doc) => ({...doc.data(), id:doc.id})))
        }
        getData()
    })

    const handleSubmit = async () => {
        //! Agregar elementos
        await addDoc(dbName, {nombre: nombre, email: email, personas: personas, fecha: fecha, hora: hora})
        setNombre("")
        setEmail("")
        setPersonas("")
        setFecha("")
        setHora("")
    }

    const handleDelete = async (id) => {
        //! Borrar elementos
        const deleteVal = doc(db, 'reservas', id)
        await deleteDoc(deleteVal)
    }

    const handleEdit = async (id, nombre, email, personas, fecha, hora) => {
        //! Pone los datos en los input y cambia el boton
        setNombre(nombre)
        setEmail(email)
        setPersonas(personas)
        setFecha(fecha)
        setHora(hora)
        setId(id)
        setShow(true)
    }
    const handleUpdate = async () => {
        //! Reescribe los datos, cambia el boton y limpia los input
        const updateData = doc(db, 'reservas', id)
        await updateDoc(updateData, {nombre: nombre, email: email, personas: personas, fecha: fecha, hora: hora})
        setShow(false)
        setNombre("")
        setEmail("")
        setPersonas("")
        setFecha("")
        setHora("")
    }
    
    return (
        <main className="booking-detail">
            <Container>
                <h2>Reservas</h2>
                <p>Para reservar una mesa completa el siguiente formulario.</p>

                <Form className='card'>
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
                                value={personas}
                                placeholder="4"
                                onChange={(e) => setPersonas(Number(e.target.value))}
                            />
                        </FormGroup>
                        <FormGroup as={Col}>
                            <Form.Label htmlFor="inputFecha">Fecha:</Form.Label>
                            <Form.Control
                                type="date"
                                id="inputFecha"
                                name="fecha"
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup as={Col}>
                            <Form.Label htmlFor="inputHora">Hora:</Form.Label>
                            <Form.Select
                                id="inputHora"
                                name="hora"
                                value={hora}
                                onChange={(e) => setHora(e.target.value)}
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
                    {!show?<Button onClick={handleSubmit}>Reservar</Button>:
                    <Button onClick={handleUpdate}>Guardar</Button>}
                </Form >

                <hr />

                <section>
                    <h4>Lista de Reservas</h4>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>N° Personas</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            val.map((values) => (
                                <tr key={values.id}>
                                    <td>{values.nombre}</td>
                                    <td>{values.email}</td>
                                    <td>{values.personas}</td>
                                    <td>{values.fecha}</td>
                                    <td>{values.hora}</td>
                                    <td><button onClick={() =>handleDelete(values.id)}>Borrar</button>
                                    <button onClick={() =>handleEdit(values.id, values.nombre, values.email, values.personas, values.fecha, values.hora)}>Editar</button></td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </section>

            </Container>
        </main>
    )
}

export default BookingDetail