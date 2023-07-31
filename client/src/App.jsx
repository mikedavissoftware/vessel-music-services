import { Routes, Route } from "react-router-dom"
import "./sass/main.scss"

import Header from "./components/Header"
import HomePage from "./components/home-page/HomePage"
import DaggettControlPage from "./components/project-pages/daggett-control/DaggettControlPage"
import BackyardBowlsPage from "./components//project-pages/backyard-bowls/BackyardBowlsPage"
import SpiritualDirectionPage from "./components/project-pages/spiritual-direction/SpiritualDirectionPage"
// import ContactPage from "./components/ContactPage"
import Footer from "./components/Footer"


export default function App() {



  return (
    <div className="app">
      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/daggett-control" element={<DaggettControlPage />} />
        <Route path="/backyard-bowls" element={<BackyardBowlsPage />} />
        <Route path="/spiritual-direction" element={<SpiritualDirectionPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>

      <Footer />
    </div>
  )
}