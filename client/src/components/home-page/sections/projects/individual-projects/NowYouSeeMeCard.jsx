import { Link } from "react-router-dom"

import ProjectImage from "../../../../../assets/projects/now-you-see-me.jpg"

export default function NowYouSeeMeCard() {

  const projectInfo = {
    title: "Now You See Me",
    subTitle: "Movie Trailer Rework",
    description: "asdf",
    url: "https://www.youtube.com/watch?v=KzJNYYkkhzc"
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