import { Routes, Route } from "react-router-dom"
import "./sass/main.scss"

import Header from "./components/Header"
import HomePage from "./components/home-page/HomePage"
import DaggettControl from "./components/DaggettControl"
import BackyardBowls from "./components/BackyardBowls"
import SpiritualDirection from "./components/SpiritualDirection"
import ContactPage from "./components/ContactPage"
import Footer from "./components/Footer"


export default function App() {



  return (
    <div className="app">
      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/daggett-control" element={<DaggettControl />} />
        <Route path="/backyard-bowls" element={<BackyardBowls />} />
        <Route path="/spiritual-direction" element={<SpiritualDirection />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  )
}