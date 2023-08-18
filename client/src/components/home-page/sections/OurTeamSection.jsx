import Placeholder from "../../../assets/jpeg/vessel sound logo v3 blue wave.jpg"
import CalebPicture from "../../../assets/jpeg/fence-pic-square-crop.jpeg"

export default function OurTeamSection() {



  return (
    <section id="team" className="team sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">Team</span>

          <div className="heading-sec__sub name-card">
            <div>
              <img src={CalebPicture}/>
            </div>
            <div>
              <h2>CALEB MCFADDEN</h2>
              <h3>FOUNDER & MUSIC SUPERVISOR</h3>
            </div>
          </div>

          <hr className="secondary"/>

          <p className="heading-sec__sub">
            <strong>Caleb McFadden</strong> is a music supervisor and sync licensing creative in Portland, OR. He carries a wealth of music industry knowledge from over a decade of experience in music licensing, live performance, A&R, creative development, music marketing, venue operations, talent booking, and artist management.
          </p>
          <br/>
          <p className="heading-sec__sub">
            Before starting Vessel, Caleb cut his teeth as the music coordinator at Clearly Music Services, working alongside fellow music supervisor and mentor, Jonathan Lane. Since then, he’s worked on a wide range of high profile projects including <em>Behind the Music</em>, <em>Creed III</em>, <em>Bones and All</em>, <em>Women Talking</em>, <em>The Retirement Plan</em>, and more.
          </p>
          <br/>
          <p className="heading-sec__sub">
            Within his web of networks, Caleb is recognized for his entrepreneurial spirit, a genuine curiosity in all things creative, and his resilient faith in the transformative power of music for individuals, businesses, and the community at large.
          </p>

          <hr className="secondary"/>

          <a href="#contact" id="get-in-touch-btn" className="btn btn--med btn--theme btn--center dynamicBgClr">Get in Touch!</a>
        </h2>
      </div>
    </section>
  )
}