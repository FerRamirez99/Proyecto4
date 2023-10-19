import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { NavLink, useParams } from "react-router-dom"
import { db } from "../../config/Firebase";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const MenuProduct = () => {
  const routeParams = useParams();
  console.log(routeParams.itemID);  //devuelve solo el num

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
        const result = docs.find(({ sku }) => sku === routeParams.itemID);
        setMenu(result)
        
      } catch (err) {
        console.error(err)
      }
    }
    getMenu()
  }, [])
  
  return (
    <main className="menu-item">
      <Container>
        <NavLink to="/menu"> <KeyboardArrowLeftIcon />Volver</NavLink>
        <h2>{menu.nombre}</h2>
        
        <Row>
          <Col xs={4}>
            <img src={menu.imagen} alt={menu.nombre} />
          </Col>
          <Col xs={8}>
            <p className="detalle">Detalle: <br />{menu.detalle}</p>
            <p className="precio">${menu.precio}</p>
            <p className="sku">SKU: {menu.sku}</p>
          </Col>
        </Row>  
      </Container>     
    </main>
  )
}

export default MenuProduct