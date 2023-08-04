
import InstagramLogoWhite from "../../../assets/png/white/insta-ico-white.png"
import FacebookLogoWhite from "../../../assets/png/white/fb-ico-white.png"
import LinktreeLogoWhite from "../../../assets/png/white/lt-ico-white.png"
import EmailLogoWhite from "../../../assets/png/white/email-ico-white.png"


export default function HeroSection() {



  return (
    <section id="home-hero" className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Welcome to Vessel</h1>
        <h1 className="heading-perm">Sync Or Swim, Bitch</h1>
        <div className="home-hero__info">
          <p className="text-primary">
            I am a full-stack software engineer, multimedia producer, creative entrepreneur, & musician with a passion for building efficient systems and a persistent hunger for learning new skills.
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="btn btn--bg">Check Out My Projects</a>
        </div>
      </div>

      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a href="https://www.instagram.com/vessel.sound/" className="home-hero__social-icon-link">
            <img
              src={InstagramLogoWhite}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://www.facebook.com/vesselsoundx/" className="home-hero__social-icon-link">
            <img
              src={FacebookLogoWhite}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://linktr.ee/vesselsound/" className="home-hero__social-icon-link">
            <img
              src={LinktreeLogoWhite}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="mailto:caleb@vesselsound.com" className="home-hero__social-icon-link">
            <img
              src={EmailLogoWhite}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  )
}