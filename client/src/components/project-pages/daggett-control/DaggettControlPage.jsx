


export default function DaggettControlPage() {



  return (
    <div>
      <section className="project-cs-hero">
        {/* Background image should be a video of scrolling through the site, maybe */}
        <video autoplay loop muted plays-inline className="project-cs-hero__video">
          <source src="./assets/mp4/daggett-control-hero-1080.mp4" type="video/mp4" />
        </video>
        
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">Daggett Control Company</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">
              An informative website for a small industrial control company in Colorado
            </p>
          </div>
          <div className="project-cs-hero__cta">
            <a href="#" className="btn btn--bg" target="_blank">Live Link</a>
          </div>
        </div>
      </section>

      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont">
              {/* GIF of scrolling through site, with option to switch between mobile and desktop versions */}
              <img
                src="./assets/jpeg/project-mockup-example.jpeg"
                alt="Project Image"
                className="project-details__showcase-img"
              />
            </div>

            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">Project Overview</h3>

                {/* Maybe have an abstract and then a dropdown menu with a more in-depth history of the project */}
                <p className="project-details__desc-para">
                  When I finished my coding boot camp, I knew I would benefit heavily from putting my skills into action for a real-world freelance client. Luckily, I had already built a strong business relationship with Ron Daggett, owner of Daggett Control Company. I had done a few technical projects for him in the past, and I was aware that Ron was interested in having a website developed for his company, so he was the most logical first client for me as a freelance web developer!
                </p>

                <p className="project-details__desc-para">
                  In addition to my past freelance technical work, I also have experience overviewing legal documentation as a clerk at a law office. This, combined with my passion for public policy, enabled me to build an airtight freelance web development contract, based on a template I found on the web. Luckily, this will serve as a template for future freelance contracts! After writing the contract, I placed it in a shared Google Drive folder, in which the client could upload website content and view relevant documents such as wireframes, site maps, time sheets, and spreadsheets for the website's database content.
                </p>

                <p className="project-details__desc-para">
                  Now that I had assembled all the materials to initiate the project, it was time to pitch it to my client. In a detailed, but concise, email, I laid out the expectations of website content, project timeline, overall cost, and payment scheduling. maybe a bulleted list or a screenshot of the email? After negotiating a few minor details with Ron and company admin Stephanie, we reached an agreement and signed the contract with the discussed revisions.
                </p>

                <p className="project-details__desc-para">
                  After 
                </p>
              </div>

              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">Skills Applied</h3>
                <div className="skills__content">
                  <div className="skills__content-skills">
    
                    {/* SOFTWARE & WEB DEVELOPMENT */}
                    <button className="skills__content-title accordion">Languages & Technologies</button>
                      <div className="panel">
                        <h4 className="skills__content-subtitle">Coding Languages</h4>
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
                          <div className="skills__skill">Git</div>
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
                  </div>
                </div>
              </div>

              <div className="project-details__links">
                <h3 className="project-details__content-title">See Live</h3>
                <a
                  href="#"
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                  >Live Link</a
                >
                <a
                  href="#"
                  className="btn btn--med btn--theme-inv project-details__links-btn"
                  target="_blank"
                  >Code Link</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}