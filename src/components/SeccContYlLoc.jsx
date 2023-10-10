import { Col, Container, Row } from 'react-bootstrap'
import Contact from './Contact'
import Location from './Location'

const SeccContYlLoc = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col>
                    <Contact />
                </Col>
                <Col>
                    <Location />
                </Col> 
            </Row>
        </Container>
    </section>
  )
}

export default SeccContYlLoc