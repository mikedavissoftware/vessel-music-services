import { Link } from "react-router-dom"

import ProjectImage from "../../../../../assets/projects/the-rookie-feds.jpg"

export default function TheRookieFedsCard() {

  const projectInfo = {
    title: "The Rookie Feds",
    subTitle: "B2B Sizzle Reel",
    description: "",
    url: ""
  }

  return (
    <div class="projects__row">
      <div class="projects__row-img-cont">
        <img
          src={ProjectImage}
          alt={`${projectInfo.title} Poster`}
          class="projects__row-img"
          loading="lazy"
        />
      </div>
      <div class="projects__row-content">
        <h3 class="projects__row-content-title">{projectInfo.title}</h3>
        <h4 class="projects__row-content-subtitle">{projectInfo.subTitle}</h4>
        <p class="projects__row-content-desc">
          {projectInfo.description}
        </p>
        {(projectInfo.url) ? (
          <Link 
            to={projectInfo.url}
            class="btn btn--med btn--theme dynamicBgClr"
            target="_blank"
          >View Project</Link>
        ) : (
          null
        )}
      </div>
    </div>
  )
}