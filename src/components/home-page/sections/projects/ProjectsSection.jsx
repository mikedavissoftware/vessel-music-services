import { useState, useEffect } from "react"

import ProjectCard from "./ProjectCard"
import BehindTheMusicTile from "./BehindTheMusicTile"


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

  // const projectComponents = projects.map((project) => {
  //   return <ProjectCard project={project} keys={keys} />
  // })

  function projectComponents(category) {
    const categoryProjects = projects.filter((project) => {
      return project[0] == category
    })
    const categoryProjectComponents = categoryProjects.map((project, index) => {
      return <ProjectCard key={index + 1} project={project} keys={keys} />
    })
    return (
      <div>
        <h3 class="projects__category">{category.toUpperCase()}</h3>
        <div class="projects__content">
          {categoryProjectComponents}
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Featured Works</span>
          {/* <span className="heading-sec__sub">
            Below is a selection of a my work within the music supervision industry.
          </span> */}
        </h2>

        {projectComponents("Television")}
        <hr className="secondary"/>
        {projectComponents("Trailers")}
        <hr className="secondary"/>
        {projectComponents("Film & TV Marketing")}
        <hr className="secondary"/>
        {projectComponents("Advertising")}
        <hr className="secondary"/>
        {projectComponents("Live")}

        <div className="projects__tiles-cont">
          <BehindTheMusicTile />
          <BehindTheMusicTile />
          <BehindTheMusicTile />
        </div>
        <hr className="secondary"/>

      </div>
    </section>
  )
}