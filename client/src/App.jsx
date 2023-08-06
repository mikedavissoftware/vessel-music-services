import { Routes, Route } from "react-router-dom"
import "./sass/main.scss"

import Header from "./components/Header"
import HomePage from "./components/home-page/HomePage"
// import ContactPage from "./components/ContactPage"
import Footer from "./components/Footer"


export default function App() {



  return (
    <div className="app">
      

      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>

      <Footer />
    </div>
  )
}