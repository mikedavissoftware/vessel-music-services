import { Link } from "react-router-dom"

import ProjectImage from "../../../../../assets/projects/the-retirement-plan.jpg"

export default function TheRetirementPlanCard() {

  const projectInfo = {
    title: "The Retirement Plan",
    subTitle: "Movie Trailer",
    description: "",
    url: "https://www.youtube.com/watch?v=i2Xc4qq-5Ww"
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