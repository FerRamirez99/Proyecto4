import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import About from './components/About'
import Recs from './components/Recs'
import Menu from './components/Menu'
import SeccContYlLoc from './components/SeccContYlLoc'
import Footer from './components/Footer'

import './App.css'


function App() {

  return (
    <>
      <NavBar />
      <main>
        <Welcome />
        <About />
        <Recs />
        <Menu />
        <SeccContYlLoc />
      </main>
      <Footer />
    </>
  )
}

export default App
