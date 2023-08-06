// import { Routes, Route } from "react-router-dom"
import "./sass/main.scss"

import Header from "./components/Header"
import HeroSectionComingSoon from "./HeroSectionComingSoon"
import Footer from "./components/Footer"


export default function App() {



  return (
    <div className="app">
      

      <Header />

      <HeroSectionComingSoon />

      <Footer />
    </div>
  )
}