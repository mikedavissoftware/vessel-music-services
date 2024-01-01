import { useState } from "react"
import { Link } from "react-router-dom"

import ProjectImage from "../../../../assets/projects/behind-the-music.jpg"

export default function BehindTheMusicTile() {
  const [mouseOver, setMouseOver] = useState(false)

  const projectInfo = {
    title: "Behind the Music",
    subTitle: "Season 3: Episodes 1 - 8",
    description: "",
    url: "https://www.paramountplus.com/shows/behind-the-music/"
  }

  return (
    <div 
      className="projects__tile"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >

      <div className="projects__tile-cont">
        <Link 
          to={projectInfo.url}
          className="projects__tile-link"
          target="_blank"
        >
          <img
            src={ProjectImage}
            alt={`${projectInfo.title} Poster`}
            className="projects__tile-img"
            loading="lazy"
          />
        </Link>

        <div className="projects__tile-content">
          <h3 className="projects__tile-content-title">{projectInfo.title}</h3>
          <h4 className="projects__tile-content-subtitle">{projectInfo.subTitle}</h4>
          <p className="projects__tile-content-desc">
            {projectInfo.description}
          </p>
        </div>
      </div>
      
    </div>
  )
}