import { useState, useEffect } from "react"

import ProjectCard from "./ProjectCard"


export default function ProjectsSection() {

  const [keys, setKeys] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/1xEINcpCOSh1gvUiHjLd2X-2LBaN27yW8AIJnVkFdo6U/values/FeaturedWorks/?key=${import.meta.env.VITE_GOOGLE_API_KEY}`)
    .then(r => r.json())
    .then(data => {
      setKeys(data.values[0])
      setProjects(data.values.slice(1))
    })
  }, [])

  console.log(keys)
  console.log(projects)

  const projectComponents = projects.map((project) => {
    return <ProjectCard project={project} keys={keys} />
  })

  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Featured Works</span>
          {/* <span className="heading-sec__sub">
            Below is a selection of a my work within the music supervision industry.
          </span> */}
        </h2>
        
        <h3 class="projects-category">TELEVISION</h3>
        <div class="projects__content">
          {projectComponents}
        </div>

        <div className="projects-tiles-cont">
          <BehindTheMusicTile />
          <BehindTheMusicTile />
          <BehindTheMusicTile />
        </div>
        <hr className="secondary"/>

        <h3 class="projects-category">TRAILERS</h3>
        <div class="projects__content">
          {}
        </div>
        <hr className="secondary"/>

        <h3 class="projects-category">FILM & TV MARKETING</h3>
        <div class="projects__content">
          {}
        </div>
        <hr className="secondary"/>

        <h3 class="projects-category">ADVERTISING</h3>
        <div class="projects__content">
          {}
        </div>
        <hr className="secondary"/>

        <h3 class="projects-category">LIVE</h3>
        <div class="projects__content">
          {}
        </div>
      </div>
    </section>
  )
}