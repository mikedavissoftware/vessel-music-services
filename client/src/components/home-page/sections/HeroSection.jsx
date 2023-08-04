
import LinkedInLogoWhite from "../../../assets/png/white/linkedin-ico-white.png"
import GithubLogoWhite from "../../../assets/png/white/github-ico-white.png"
import YouTubeLogoWhite from "../../../assets/png/white/yt-ico-white.png"

export default function HeroSection() {



  return (
    <section id="home-hero" className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hey there!</h1>
        <h1 className="heading-perm">I'm Mike</h1>
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
          <a href="https://www.linkedin.com/in/mikedavissoftware" className="home-hero__social-icon-link">
            <img
              src={LinkedInLogoWhite}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://github.com/mikedavissoftware" className="home-hero__social-icon-link">
            <img
              src={GithubLogoWhite}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://www.youtube.com/channel/UCYzUffLPbfIJnjQgKIegclA" className="home-hero__social-icon-link">
            <img
              src={YouTubeLogoWhite}
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