import { Button, Card, CardGroup } from "react-bootstrap"
import { NavLink } from "react-router-dom"


const MenuCard = (props) => {
    const menu = props.menu
    return (
        <CardGroup>
          {
            menu.map((plato) => (
              <div key={plato.id}>
                <Card>
                  <Card.Img variant="top" style={{ height: "200px" }} src={plato.imagen} alt={plato.nombre} />
                  <Card.Body>
                    <Card.Title>{plato.nombre}</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <NavLink to={`/menu/${plato.sku}`}>
                      <Button variant="primary">${plato.precio}</Button>
                    </NavLink>
                  </Card.Footer>
                </Card>
              </div>  
            ))
          }
        </CardGroup>
    )
}

export default MenuCard