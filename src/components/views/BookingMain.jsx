import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../../config/Firebase"
import { Input } from "../Input"
import { Button, Container, Form } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Tabla } from "../Tabla"

const BookingMain = () => {
    const reservasCollectionRef = collection(db, "reservas")

    const [reservas, setReservas] = useState([])
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [personas, setPersonas] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [editingId, setEditingId] = useState(null)

    //
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (editingId) {
            await updateRes(editingId)
        } else {
            await createRes()
        }
        clearForm()
        getReservas()
    }
    //Obtener datos de firestore
    const getReservas = async () => {
        const data = await getDocs(reservasCollectionRef);
        setReservas(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    //Crear nueva reserva
    const createRes = async () => {
        if (validateForm()) {
            await addDoc(reservasCollectionRef, {nombre, email, personas, fecha, hora})
        }
    }
    //Actualizar reserva
    const updateRes = async (id) => {
        const reserva = await getDoc(doc(db, 'reservas', id))
        const data = { nombre, email, personas, fecha, hora }
        await updateDoc(reserva.ref, data)
        clearForm()
    }
    //Editar reserva
    const editRes = async (id) => {
        const reserva = await getDoc(doc(db, 'reservas', id))
        if (reserva.exists()) {
            setNombre(reserva.data().nombre)
            setEmail(reserva.data().email)
            setPersonas(reserva.data().personas)
            setFecha(reserva.data().fecha)
            setHora(reserva.data().hora)
            setEditingId(id)

            setReservas(prevRes => prevRes.map(prevRes => ({
                ...prevRes,
                isEditing: prevRes.id === id
            })))
        }
    }
    //Eliminar reserva
    const deleteRes = async (id) => {
        const resDoc = doc(db, 'reservas', id)
        await deleteDoc(resDoc)
        getReservas()
    }
    //Validar formulario
    function validateForm() {
        if (!nombre || !email || !personas || !fecha || !hora) {
            alert('Todos los campos son requeridos')
            return false
        }
        return true
    }
    //Limpiar inputs
    const clearForm = () => {
        setNombre("")
        setEmail("")
        setPersonas("")
        setFecha("")
        setHora("")
        setEditingId(null)
    }

    useEffect(() => {
        getReservas()
    }, [])

    return (
        <main className="booking-detail">
            <Container>
                <h2>Reservas</h2>
                <p>Para reservar una mesa completa el siguiente formulario.</p>
                <Form className='card' onSubmit={handleSubmit}>
                    <Input 
                        nombre={nombre} setNombre={setNombre}
                        email={email} setEmail={setEmail}
                        personas={personas} setPersonas={setPersonas}
                        fecha={fecha} setFecha={setFecha}
                        hora={hora} setHora={setHora}
                    />
                    <Button type="submit">{editingId ? 'Guardar' : 'Reservar'}</Button>
                </Form>
                <hr />
                <section className="booking-list">
                    <h4>Lista de Reservas</h4>
                    <Tabla reservas={reservas} deleteRes={deleteRes} editRes={editRes}/>
                </section>
            </Container>
        </main>
    )
}

export default BookingMain