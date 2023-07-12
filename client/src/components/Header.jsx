import ProfilePicture from "../assets/jpeg/mds-prof-pic-close-square.jpg"
import LinkedInLogoBlack from "../assets/png/black/linkedin-ico-black.png"
import GithubLogoBlack from "../assets/png/black/github-ico-black.png"
import YouTubeLogoBlack from "../assets/png/black/yt-ico-black.png"
import HamMenu from "../assets/svg/ham-menu.svg"
import HamMenuClose from "../assets/svg/ham-menu-close.svg"

export default function Header() {


  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src={ProfilePicture}
              alt="Mike Davis Profile Picture"
              className="header__logo-img"
            />
          </div>
          
          <span className="header__logo-sub">Mike Davis</span>
        </div>

        <div className="header__social-cont">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mikedavissoftware">
            <img
              className="main-footer__icon"
              src={LinkedInLogoBlack}
              alt="icon"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/mikedavissoftware">
            <img
              className="main-footer__icon"
              src={GithubLogoBlack}
              alt="icon"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCYzUffLPbfIJnjQgKIegclA">
            <img
              className="main-footer__icon"
              src={YouTubeLogoBlack}
              alt="icon"
            />
          </a>
        </div>

        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="./" className="header__link"> Home </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#about" className="header__link"> About </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#projects" className="header__link"> Projects </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#contact" className="header__link"> Contact </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont">
            <img
              src={HamMenu}
              alt="hamburger menu"
              className="header__main-ham-menu"
            />
            <img
              src={HamMenuClose}
              alt="hamburger menu close"
              className="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>

      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="./index.html"> Home </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#about"> About </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#projects"> Projects </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}