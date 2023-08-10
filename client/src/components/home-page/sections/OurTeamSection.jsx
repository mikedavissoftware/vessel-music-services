import Placeholder from "../../../assets/jpeg/vessel sound logo v3 blue wave.jpg"
import CalebPicture from "../../../assets/jpeg/fence-pic-square-crop.jpeg"

export default function OurTeamSection() {



  return (
    <section id="team" className="team sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">Our Team</span>

          <div className="name-card">
            <div>
              <img src={CalebPicture}/>
            </div>
            <div>
              <h2>CALEB MCFADDEN</h2>
              <h3>FOUNDER | MUSIC SUPERVISOR</h3>
            </div>
          </div>

          <p className="heading-sec__sub">
            Caleb McFadden is a music supervisor and sync licensing creative in Portland, OR. He carries a wealth of music industry knowledge from over a decade of experience in music licensing, live performance, artist relations, creative development, music marketing, venue operations, talent booking, and artist management.
          </p>
          <br/>
          <p className="heading-sec__sub">
            Before starting Vessel, Caleb cut his teeth as the music coordinator at Clearly Music Services, working alongside fellow music supervisor and mentor, Jonathan Lane. Though he considers marketing and advertising content for Film & TV as his real bread & butter, Caleb’s experience at Clearly refined his music supervision skills within all forms of media, and he pushes himself to ensure that every new project turns out better than the last.
          </p>
          <br/>
          <p className="heading-sec__sub">
            Within his web of networks, Caleb is recognized for his entrepreneurial spirit, a passion for empowering his community, a genuine curiosity in all things creative, and his resilient faith in the transformative power of music for individuals, businesses, and the community at large.
          </p>
          <a href="#contact" id="get-in-touch-btn" className="btn btn--med btn--theme btn--center dynamicBgClr">Get in Touch!</a>
        </h2>
      </div>
    </section>
  )
}