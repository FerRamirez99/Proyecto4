import Welcome from '../Welcome'
import About from '../About'
import Recs from '../Recs'
import Menu from '../Menu'
import SeccContYlLoc from '../SeccContYlLoc'

const Home = () => {
    return (
        <>
            <main>
                <Welcome />
                <About />
                <Recs />
                <Menu />
                <SeccContYlLoc />
            </main>
        </>
    )
}

export default Home