import { useState, useEffect } from "react"


export default function AboutVesselSection() {

  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About</span>

          <p className="heading-sec__sub">
            <strong>Vessel is a music supervision company specializing in sync licensing for film marketing, advertising content, TV programming, video games, podcasts, films, and new media. We facilitate the music vision for media creatives and companies of all sizes by curating music that amplifies their stories both accurately and punctually.</strong>
          </p>
          <hr className="secondary"/>
          <p className="heading-sec__sub" style={{fontSize: "1.8rem"}}>
            <strong><em>
              So, what's a music supervisor?
            </em></strong>
          </p>
          {/* <br/> */}
          <p className="heading-sec__sub">
            A <a href="https://www.guildofmusicsupervisors.com/what-is-a-music-supervisor" target="_blank"><strong>music supervisor</strong></a> is the head of the music department that oversees all aspects of music on a project / production.  They collaborate with key decision-makers to help determine the musical vision within the budget.
          </p>
          <br/>
          <p className="heading-sec__sub" style={{fontSize: "1.8rem"}}>
            <strong><em>
              Why should I hire a music supervisor?
            </em></strong>
          </p>
          {/* <br/> */}
          <p className="heading-sec__sub">
            You hire a music supervisor to ensure that the project’s deliverables are accurate and accounted for as well as creative vision intact sonically within budget. In return, this saves the project money and time.
          </p>
          {/*<br/>
          <hr className="secondary"/>
          <a href="#contact" id="get-in-touch-btn" className="btn btn--med btn--theme btn--center dynamicBgClr">Get in Touch!</a> */}
        </h2>
      </div>
    </section>
  )
}