import { Button, Card, CardGroup, Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../config/Firebase"


const MenuList = () => {
  const [menu, setMenu] = useState([])

  useEffect(() => {
    const getMenu = async () => {
      try {
        const collectionRef = collection(db, "menu2")
        const response = await getDocs(collectionRef)

        const docs = response.docs.map((doc) => {
          const data = doc.data()
          data.id = doc.id
          return data
        })
        setMenu(docs)

      } catch (err) {
        console.error(err)
      }
    }
    getMenu()
  }, [])

  return (
    <main className="menu-list">
      <Container>
        <h2>Menú</h2>
        <CardGroup>
          {
            menu.map((plato) => (
              <div key={plato.id}>
                <Card style={{ width: "18rem", height: "350px" }}>
                  <Card.Img variant="top" style={{ height: "200px" }} src={plato.imagen} alt={plato.nombre} />
                  <Card.Body>
                    <Card.Title>{plato.nombre}</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <NavLink to={`/menu/${plato.id}`}>
                      <Button variant="primary">${plato.precio}</Button>
                    </NavLink>
                  </Card.Footer>

                </Card>
              </div>
            ))}
        </CardGroup>


        {/* <CardGroup>
          {menu.forEach((element) => console.log(element.id))}
          {/* {console.log(menu[2])} */}
        {/* {menu.map((plato) => (
            <div key={plato.id}>
              <Card style={{ width: "18rem", height: "400px" }}>
                <Card.Img variant="top" style={{height: "200px"}} src={plato.imagen} alt={plato.nombre} />
                <Card.Body>
                  <Card.Title>{plato.nombre}</Card.Title>
                  <Card.Text>{plato.detalle}</Card.Text>
                  <Button variant="success">Precio: ${plato.precio}</Button>
                </Card.Body>
              </Card>
            </div>
          ))} 
      </CardGroup> */}

        {/* <Button><NavLink to={`/products/plato1`} style={{color: "white", textDecoration: "none"}}>Ver Producto</NavLink></Button> */}
      </Container>
    </main>
  )
}

export default MenuList