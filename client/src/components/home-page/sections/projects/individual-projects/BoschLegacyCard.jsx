import { Link } from "react-router-dom"

import ProjectImage from "../../../../../assets/projects/bosch-legacy.jpg"

export default function BoschLegacyCard() {

  const projectInfo = {
    title: "Bosch: Legacy",
    subTitle: "Season 2 Trailer",
    description: "asdf",
    url: "https://www.youtube.com/watch?v=8JZfaj4Xy2w"
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
        <Link 
          to={projectInfo.url}
          class="btn btn--med btn--theme dynamicBgClr"
          target="_blank"
        >View Project</Link>
      </div>
    </div>
  )
}