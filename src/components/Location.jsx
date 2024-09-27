import LocationOnIcon from '@mui/icons-material/LocationOn';

const Location = () => {
  return (
    <div className="location">
        <h2>Location</h2>
        <p><LocationOnIcon /> Av. Andrés Bello 2425, Providencia, Santiago</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6660.429573601763!2d-70.6151877!3d-33.4176442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf69d4854951%3A0x9a87ef2fefaad0df!2sCostanera%20Center!5e0!3m2!1ses!2scl!4v1697053144202!5m2!1ses!2scl"
        width="600"
        height="350"
        style={{border: "0"}}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Location