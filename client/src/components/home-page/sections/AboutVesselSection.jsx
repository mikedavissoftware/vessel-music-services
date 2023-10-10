


export default function AboutVesselSection() {

  console.log(import.meta.env.MODE)

  // console.log(import.meta.env.VITE_GOOGLE_API_KEY)
  console.log(import.meta.env.APIKey)

  fetch(`https://sheets.googleapis.com/v4/spreadsheets/1xEINcpCOSh1gvUiHjLd2X-2LBaN27yW8AIJnVkFdo6U/values/FeaturedWorks/?key=${import.meta.env.VITE_GOOGLE_API_KEY}`)
  .then(r => r.json())
  .then(data => {
    console.log(data)
  })

  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About</span>

          <img src="https://drive.google.com/uc?export=view&id=18-Ky8ixe24x2WhzsKGOw4oJinMhFUz3k" />

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