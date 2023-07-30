import { useState } from "react"


export default function SkillsSection() {

  const [active, setActive] = useState("")

  const handleClick = (event) => {
    (event.target.id === active) ? (setActive("")) : (setActive(event.target.id));
    console.log(event.target.id)
  }

  return (
    <section id ="skills" className="skills sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">My Skills</span>
          <p className="heading-sec__sub">
          </p>
        </h2>
        <div className="skills__content">
          <div className="skills__content-skills">

            {/*SOFTWARE & WEB DEVELOPMENT*/}
            <button 
              className={`skills__content-title accordion${(active === "software-engineering") ? " active" : ""}`}
              id="software-engineering"
              onClick={handleClick}
            >Software Engineering</button>

            <div className={`panel${(active === "software-engineering") ? " active" : ""}`}>
              <h4 className="skills__content-subtitle">Languages</h4>
              <div className="skills">
                <div className="skills__program">HTML</div>
                <div className="skills__program">CSS</div>
                <div className="skills__program">JavaScript</div>
                <div className="skills__program">Ruby</div>
                <div className="skills__program">SQL</div>
              </div>

              <h4 className="skills__content-subtitle">Frameworks, Libraries, & Plugins</h4>
              <div className="skills">
                <div className="skills__skill">React</div>
                <div className="skills__skill">Redux</div>
                <div className="skills__skill">Ruby on Rails</div>
                <div className="skills__skill">Rails Admin</div>
                <div className="skills__skill">SASS</div>
                <div className="skills__skill">Tailwind CSS</div>
                <div className="skills__skill">Daisy UI</div>
                <div className="skills__skill">Semantic UI</div>
              </div>

              <h4 className="skills__content-subtitle">Platforms, Environments, & Other Tools</h4>
              <div className="skills">
                <div className="skills__skill">Github</div>
                <div className="skills__skill">Wordpress</div>
                <div className="skills__skill">Node.js</div>
                <div className="skills__skill">NPM & NPX</div>
                <div className="skills__skill">PostgreSQL</div>
                <div className="skills__skill">SQLite3</div>
                <div className="skills__skill">Rails Views</div>
                <div className="skills__skill">Vite</div>
                <div className="skills__skill">Create React App</div>
                <div className="skills__skill">VS Code</div>
                <div className="skills__skill">Postman</div>
                <div className="skills__skill">Postman</div>              
              </div>

              <h4 className="skills__content-subtitle">Skills & Principles</h4>
              <div className="skills">
                <div className="skills__skill">Front End</div>
                <div className="skills__skill">Back End</div>
                <div className="skills__skill">Full Stack</div>
                <div className="skills__skill">Web Development</div>
                <div className="skills__skill">Web & UI Design</div>
                <div className="skills__skill">CRUD & Custom API's</div>
                <div className="skills__skill">RESTful Routing</div>
                <div className="skills__skill">Object-Oriented Programming</div>
                <div className="skills__skill">Version Control</div>
                <div className="skills__skill">Branch Management</div>
                <div className="skills__skill">Clean Code</div>
                <div className="skills__skill">Refactoring & Optimization</div>
                <div className="skills__skill">Disks & Cloud Storage</div>
                <div className="skills__skill">Authentication & Authorization</div>
                <div className="skills__skill">Data Validations</div>
                <div className="skills__skill">Client-Side Routing</div>
              </div>
            </div>

            {/*MEDIA PRODUCTION*/}
            <button 
              className={`skills__content-title accordion${(active === "media-production") ? " active" : ""}`}
              id="media-production"
              onClick={handleClick}
            >Media Production</button>

            <div className={`panel${(active === "media-production") ? " active" : ""}`}>
              <h4 className="skills__content-subtitle">Software Programs</h4>

              <div className="skills">
                <div className="skills__program">Bitwig</div>
                <div className="skills__program">Ableton</div>
                <div className="skills__program">Pro Tools</div>
                <div className="skills__program">Logic Pro</div>
                <div className="skills__program">FL Studio</div>
                <div className="skills__program">VST Plugins</div>
                <div className="skills__program">Kontakt</div>
                <div className="skills__program">Adobe Creative Suite</div>
                <div className="skills__program">Photoshop</div>
                <div className="skills__program">Illustrator</div>
                <div className="skills__program">Premiere Pro</div>
                <div className="skills__program">Davinci Resolve</div>
                <div className="skills__program">Wordpress</div>
              </div>
              
              <h4 className="skills__content-subtitle">Audio Production</h4>
              <div className="skills">
                <div className="skills__skill">Music Production</div>
                <div className="skills__skill">Mixing</div>
                <div className="skills__skill">Mastering</div>
                <div className="skills__skill">Sound Engineering</div>
                <div className="skills__skill">Podcast Production & Editing</div>
                <div className="skills__skill">Audiobook Editing</div>
                <div className="skills__skill">Live Audio</div>
                <div className="skills__skill">Field Recording</div>
                <div className="skills__skill">Sound Treatment</div>
                <div className="skills__skill">Amplification</div>
                <div className="skills__skill">Microphone Selection & Technique</div>
              </div>

              <h4 className="skills__content-subtitle">Film & Video Production</h4>
              <div className="skills">
                <div className="skills__skill">Videography</div>
                <div className="skills__skill">Video Editing</div>
                <div className="skills__skill">Color Correction</div>
                <div className="skills__skill">Film Audio & ADR</div>
                <div className="skills__skill">Scripting & Storyboarding</div>
                <div className="skills__skill">Cinematography</div>
                <div className="skills__skill">Motion Graphics</div>
                <div className="skills__skill">Directing</div>
                <div className="skills__skill">Lighting</div>
                <div className="skills__skill">Location Scouting</div>
                <div className="skills__skill">Equipment Care & Maintenance</div>
              </div>

              <h4 className="skills__content-subtitle">Graphic Design</h4>

              <div className="skills">
                <div className="skills__skill">Logo Design</div>
                <div className="skills__skill">Poster Design</div>
                <div className="skills__skill">Social Media Graphics</div>
                <div className="skills__skill">Photo Editing</div>
                <div className="skills__skill">Digitization</div>
                <div className="skills__skill">Image Blending</div>
                <div className="skills__skill">Digital Illustration</div>
                <div className="skills__skill">Masking & Composition</div>              
              </div>
            </div>


            {/*ENTREPRENEURSHIP & BUSINESS DEVELOPMENT*/}
            <button 
              className={`skills__content-title accordion${(active === "entrepreneurship-and-business") ? " active" : ""}`}
              id="entrepreneurship-and-business"
              onClick={handleClick}
            >Entrepreneurship & Business Development</button>
              <div className={`panel${(active === "entrepreneurship-and-business") ? " active" : ""}`}>
                <h4 className="skills__content-subtitle">Industries</h4>
                <div className="skills">
                  <div className="skills__program">Music Industry</div>
                  <div className="skills__program">501(c)(3) Nonprofit Organizations</div>
                  <div className="skills__program">Freelance Media Production</div>
                  <div className="skills__program">Independent Film Industry</div>
                  <div className="skills__program">Live Event Production</div>
                </div>

                <h4 className="skills__content-subtitle">Music Industry</h4>
                <div className="skills">
                  <div className="skills__skill">React</div>
                  <div className="skills__skill">Redux</div>
                  <div className="skills__skill">Ruby on Rails</div>
                  <div className="skills__skill">Rails Admin</div>
                  <div className="skills__skill">SASS</div>
                  <div className="skills__skill">Tailwind CSS</div>
                  <div className="skills__skill">Daisy UI</div>
                  <div className="skills__skill">Semantic UI</div>
                </div>

                <h4 className="skills__content-subtitle">Nonprofit Organizations</h4>
                <div className="skills">
                  <div className="skills__skill">Git</div>
                  <div className="skills__skill">Wordpress</div>
                  <div className="skills__skill">Node.js</div>
                  <div className="skills__skill">PostgreSQL</div>
                  <div className="skills__skill">SQLite3</div>
                  <div className="skills__skill">Rails Views</div>
                  <div className="skills__skill">Vite</div>
                  <div className="skills__skill">Create React App</div>
                  <div className="skills__skill">VS Code</div>
                  <div className="skills__skill">Postman</div>
                  <div className="skills__skill">Postman</div>              
                </div>
              </div>

            {/*MUSIC COMPOSITION & PERFORMANCE*/}
            <button 
              className={`skills__content-title accordion${(active === "music-composition-and-performance") ? " active" : ""}`}
              id="music-composition-and-performance"
              onClick={handleClick}
            >Music Composition & Performance</button>
              <div className={`panel${(active === "music-composition-and-performance") ? " active" : ""}`}>
                <h4 className="skills__content-subtitle">Instruments</h4>
                <div className="skills">
                  <div className="skills__program">Drums & Percussion</div>
                  <div className="skills__program">Electric & Acoustic Guitar</div>
                  <div className="skills__program">Electric Bass Guitar</div>
                  <div className="skills__program">Vocal</div>
                  <div className="skills__program">Piano & Keys</div>
                  <div className="skills__program">Mandolin</div>
                  <div className="skills__program">Sampling & Sound Manipulation</div>
                  <div className="skills__program">Piano & Keys</div>
                </div>

                <h4 className="skills__content-subtitle">Music Composition & Writing</h4>
                <div className="skills">
                  <div className="skills__skill">React</div>
                  <div className="skills__skill">Redux</div>
                  <div className="skills__skill">Ruby on Rails</div>
                  <div className="skills__skill">Rails Admin</div>
                  <div className="skills__skill">SASS</div>
                  <div className="skills__skill">Tailwind CSS</div>
                  <div className="skills__skill">Daisy UI</div>
                  <div className="skills__skill">Semantic UI</div>
                </div>

                <h4 className="skills__content-subtitle">Platforms, Environments, & Other Tools</h4>
                <div className="skills">
                  <div className="skills__skill">Git</div>
                  <div className="skills__skill">Wordpress</div>
                  <div className="skills__skill">Node.js</div>
                  <div className="skills__skill">PostgreSQL</div>
                  <div className="skills__skill">SQLite3</div>
                  <div className="skills__skill">Rails Views</div>
                  <div className="skills__skill">Vite</div>
                  <div className="skills__skill">Create React App</div>
                  <div className="skills__skill">VS Code</div>
                  <div className="skills__skill">Postman</div>
                  <div className="skills__skill">Postman</div>              
                </div>
              </div>
            


            <br/>
            <em>lyricism, musical composition & arrangement, live & studio performance, marketing & promotion, sales, merchandising, budgeting, business & project management, communications, team-building, and conflict resolution</em>
          </div>
            
            
            
            {/*GET IN TOUCH*/}
            {/*<h3 className="about__content-title">Get in touch!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                If you're interested in hiring me, collaborating with me, inquiring about my areas of expertise, or simply getting to know me as a person, don't hesitate to reach out! I'm always happy to connect with someone new.
              </p>
            </div>
            <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr">Contact</a>*/}
        </div>
      </div>
    </section>
  )
}