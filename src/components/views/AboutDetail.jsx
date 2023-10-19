import { Col, Container, Figure, Image, Row } from "react-bootstrap"
import img1 from "../../assets/restaurant.jpg"
import img2 from "../../assets/chef.jpg"
import img3 from "../../assets/food.jpg"


const AboutDetail = () => {
  return (
    <main className="about-page">
      <Image src={img1} alt="Imagen top" className="img-about" fluid />
      <Container>
        <Row>
          <h2>Sobre Nosotros</h2>
          <Col md={4}>
            <Figure>
              <Figure.Image
                width={250}
                height={80}
                alt="171x180"
                src={img2}
              />
            </Figure>
          </Col>
          <Col md={8}>
            <p>Bienvenidos a Vita in Tavola, tu destino culinario italiano en el corazón de la ciudad. En Vita in Tavola, nuestra pasión es la auténtica comida italiana, y hemos estado sirviendo platos deliciosos y memorables desde 1995.</p>
            <p>Nuestra historia comenzó con la visión de Antonio Russo, un apasionado amante de la cocina italiana que soñaba con llevar los sabores de Italia a esta encantadora esquina de la ciudad. Lo que comenzó como un modesto ristorante se ha convertido en un lugar de encuentro para amantes de la gastronomía, familias y amigos que buscan una experiencia culinaria única.</p>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <h3>Nuestra Filosofía</h3>
            <p>En Vita in Tavola, creemos en la simplicidad y la calidad. Nuestra filosofía se basa en ingredientes frescos, recetas tradicionales y un toque de creatividad para ofrecer auténticos platos italianos con un toque especial. Cada día, nuestro talentoso equipo de chefs trabaja con pasión y dedicación para crear platos que te transportarán a las calles de Roma, Florencia o Nápoles.</p>

            <h3>Nuestra Experiencia</h3>
            <p>Desde el momento en que cruzas nuestras puertas, te sumergirás en una atmósfera cálida y acogedora. Nuestra decoración, inspirada en la belleza y la historia de Italia, te hará sentir como si estuvieras en un rincón de la Toscana. Ya sea una cena romántica, una comida en familia o una celebración especial, en Vita in Tavola te esperamos con los brazos abiertos.</p>
          </Col>
          <Col md={4}>
            <Figure>
              <Figure.Image
                width={250}
                height={200}
                alt="171x180"
                src={img3}
              />
            </Figure>
          </Col>

        </Row>
        <Row>
          <h3>Nuestro Compromiso</h3>
          <p>En Vita in Tavola, estamos comprometidos con la satisfacción de nuestros clientes. Nos esforzamos por ofrecer un servicio excepcional y una experiencia gastronómica inolvidable. Siempre escuchamos tus comentarios y sugerencias para mejorar y seguir cumpliendo con tus expectativas.</p>

          <p>Gracias por elegir Vita in Tavola como tu destino para disfrutar de la auténtica comida italiana. Te invitamos a explorar nuestro menú y a disfrutar de la pasión y la tradición que ponemos en cada plato que servimos.</p>

          <p>¡Esperamos verte pronto!</p>
        </Row>
      </Container>
    </main>
  )
}

export default AboutDetail