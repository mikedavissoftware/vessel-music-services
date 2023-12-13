import { useState } from "react"

import ProfilePicture from "../assets/jpeg/vessel sound logo v3 blue wave.jpg"

import InstagramLogoBlack from "../assets/png/black/insta-ico-black.png"
import FacebookLogoBlack from "../assets/png/black/fb-ico-black.png"
import LinktreeLogoBlack from "../assets/png/black/lt-ico-black.png"
import EmailLogoBlack from "../assets/png/black/email-ico-black.png"

import HamMenu from "../assets/svg/ham-menu.svg"
import HamMenuClose from "../assets/svg/ham-menu-close.svg"

export default function Header() {

  const [active, setActive] = useState(false)

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <a href="/">
              <img
                src={ProfilePicture}
                alt="Mike Davis Profile Picture"
                className="header__logo-img"
              />
            </a>
          </div>
          {/* <a href="/" className="header__logo-sub">Vessel Music Services</a> */}
        </div>

        <div className="header__social-cont">
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/vessel.sound/">
            <img
              className="main-footer__icon"
              src={InstagramLogoBlack}
              alt="icon"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/vesselmusicservices/">
            <img
              className="main-footer__icon"
              src={FacebookLogoBlack}
              alt="icon"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://linktr.ee/vesselsound/">
            <img
              className="main-footer__icon"
              src={LinktreeLogoBlack}
              alt="icon"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="mailto:caleb@vesselsound.com">
            <img
              className="main-footer__icon"
              src={EmailLogoBlack}
              alt="icon"
            />
          </a>
        </div>

        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="./#home" className="header__link"> Home </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#about" className="header__link"> About </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#team" className="header__link"> Team </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#projects" className="header__link"> Featured Works </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#contact" className="header__link"> Contact </a>
            </li>
          </ul>
          
          <div className="header__main-ham-menu-cont">
            <img
              src={HamMenu}
              alt="hamburger menu"
              className={`header__main-ham-menu${(active) ? (" d-none") : ("")}`}
              onClick={() => {setActive(!active)}}
            />
            <img
              src={HamMenuClose}
              alt="hamburger menu close"
              className={`header__main-ham-menu-close${(active) ? ("") : (" d-none")}`}
              onClick={() => {setActive(!active)}}
            />
          </div>
        </div>
      </div>

      <div className={`header__sm-menu${(active) ? ("--active") : ("")}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="./#home" onClick={() => setActive(false)}> Home </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./#about" onClick={() => setActive(false)}> About </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./#team" onClick={() => setActive(false)}> Team </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./#projects" onClick={() => setActive(false)}> Featured Works </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./#contact" onClick={() => setActive(false)}> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}