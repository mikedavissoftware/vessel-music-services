import InstagramLogoWhite from "../assets/png/white/insta-ico-white.png"
import FacebookLogoWhite from "../assets/png/white/fb-ico-white.png"
import LinktreeLogoWhite from "../assets/png/white/lt-ico-white.png"
import EmailLogoWhite from "../assets/png/white/email-ico-white.png"


export default function Footer() {



  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Vessel</h4>
            <p className="main-footer__short-desc">
              Music Supervision Services
            </p>

            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/vessel.sound/">
                <img
                  className="main-footer__icon"
                  src={InstagramLogoWhite}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/vesselmusicservices/">
                <img
                  className="main-footer__icon"
                  src={FacebookLogoWhite}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://linktr.ee/vesselsound/">
                <img
                  className="main-footer__icon"
                  src={LinktreeLogoWhite}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="mailto:caleb@vesselsound.com">
                <img
                  className="main-footer__icon"
                  src={EmailLogoWhite}
                  alt="icon"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="main-footer__lower">
          &copy; Copyright 2023.<br/>Adapted for React.js and Ruby on Rails from a template by
          <a rel="noreferrer" target="_blank" href="https://github.com/rammcodes/Dopefolio">template</a> by <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">Ram Maheshwari</a>
        </div>
      </div>
    </footer>
  )
}