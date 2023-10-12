import { useState } from "react"
import { Link } from "react-router-dom"

import ProjectImage from "../../../../../assets/projects/behind-the-music.jpg"

export default function BehindTheMusicTile() {
  const [mouseOver, setMouseOver] = useState(false)

  const projectInfo = {
    title: "Behind the Music",
    subTitle: "Season 3: Episodes 1 - 8",
    description: "",
    url: "https://www.paramountplus.com/shows/behind-the-music/"
  }

  return (
    <div className="projects__tile">
      <div className="projects__tile-img-cont">

        {(projectInfo.url) ? (
          <Link 
            to={projectInfo.url}
            className=""
            target="_blank"
          >
            <img
              src={ProjectImage}
              alt={`${projectInfo.title} Poster`}
              className="projects__tile-img"
              loading="lazy"
            />
          </Link>
        ) : (
          <img
            src={ProjectImage}
            alt={`${projectInfo.title} Poster`}
            className="projects__tile-img"
            loading="lazy"
          />
        )}

        <div className="projects__tile-img-content">
          <h3 className="projects__tile-img-content-title">{projectInfo.title}</h3>
          <h4 className="projects__tile-img-content-subtitle">{projectInfo.subTitle}</h4>
          <p className="projects__tile-img-content-desc">
            {projectInfo.description}
          </p>
        </div>
      </div>
      
    </div>
  )
}