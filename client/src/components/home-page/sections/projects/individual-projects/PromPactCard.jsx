import { Link } from "react-router-dom"

import ProjectImage from "../../../../../assets/projects/prom-pact.jpg"

export default function PromPactCard() {

  const projectInfo = {
    title: "Prom Pact",
    subTitle: "Movie Trailer",
    description: "asdf",
    url: "https://www.youtube.com/watch?v=brX-L41RJdA"
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