import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../config/Firebase"
import { Container, Spinner } from "react-bootstrap"
import MenuCard from "../MenuCard"

const MenuList = () => {
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(false) 

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
        setLoading(true)
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
        {loading ? (<MenuCard menu={menu} />) : (<Spinner animation="border" />)}
      </Container>
    </main>
  )
}

export default MenuList