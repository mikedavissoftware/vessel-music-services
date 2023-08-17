import { Link } from "react-router-dom"

import ProjectImage from "../../../../../assets/projects/accused.jpg"

export default function CreedIIICard() {

  const projectInfo = {
    title: "Creed III",
    subTitle: '“Campeones” / “A Woman’s Creed” / “Signs of a Fighter”',
    description: "asdf",
    url1: "",
    url2: "",
    url3: ""
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