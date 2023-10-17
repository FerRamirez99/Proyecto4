import Welcome from '../Welcome'
import About from '../About'
import Menu from '../Menu'
import SeccContYlLoc from '../SeccContYlLoc'
import Booking from '../Booking'

const Home = () => {
    return (
        <>
            <main>
                <Welcome />
                <About />
                <Menu />
                <SeccContYlLoc />
                <Booking />
            </main>
        </>
    )
}

export default Home