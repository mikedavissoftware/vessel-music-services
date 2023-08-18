import { Link } from "react-router-dom"

import ProjectImage from "../../../../../assets/projects/hennessy-creed.jpg"

export default function HennessyCard() {

  const projectInfo = {
    title: "Hennessy",
    subTitle: "“Creed III x Hennessy Co-Branded Context”",
    description: "",
    url: "https://www.instagram.com/reel/CpOcdiQpa_7/?igshid=MTc4MmM1YmI2Ng%3D%3D"
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