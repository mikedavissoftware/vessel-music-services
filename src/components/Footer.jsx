import InstagramLogoWhite from "../assets/png/white/insta-ico-white.png"
import FacebookLogoWhite from "../assets/png/white/fb-ico-white.png"
import LinktreeLogoWhite from "../assets/png/white/lt-ico-white.png"
import EmailLogoWhite from "../assets/png/white/email-ico-white.png"


export default function Footer() {



  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer">
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt main-footer-logo">vessel</h4>
            <p className="main-footer__short-desc">
              Music Supervision • Music Clearance & Licensing • Sync Consulting
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
          &copy; Copyright 2023 Vessel Music Services<br/>Adapted for React.js by <a rel="noreferrer" target="_blank" href="https://mikedavissoftware.com">Mike Davis</a> from a 
          <a rel="noreferrer" target="_blank" href="https://github.com/rammcodes/Dopefolio">template by Ram Maheshwari</a>
        </div>
      </div>
    </footer>
  )
}