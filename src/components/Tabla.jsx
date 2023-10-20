import { Button, Table } from "react-bootstrap"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

export const Tabla = ({ reservas, deleteRes, editRes }) => {
    return (
        <Table striped variant="dark" responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>N° Personas</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Editar/Borrar</th>
                </tr>
            </thead>
            <tbody>
                {
                    reservas.map((reserva) => (
                        <tr key={reserva.id}>
                            <td>{reserva.nombre}</td>
                            <td>{reserva.email}</td>
                            <td>{reserva.personas}</td>
                            <td>{reserva.fecha}</td>
                            <td>{reserva.hora}</td>
                            <td>
                                <Button onClick={() => editRes(reserva.id)}><EditIcon /></Button>
                                <Button onClick={() => deleteRes(reserva.id)}><DeleteOutlineIcon /></Button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}