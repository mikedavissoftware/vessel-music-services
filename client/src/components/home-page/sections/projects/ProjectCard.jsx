import { Link } from "react-router-dom"

export default function ProjectCard({ project, keys }) {

  const projectInfo = {}

  keys.forEach((key, index) => {
    projectInfo[key] = project[index]
  })

  const imageUrl = `https://drive.google.com/uc?id=${projectInfo.image.slice(32, 65)}`
  console.log(imageUrl)

  return (
    <div class="projects__row">
      <div class="projects__row-img-cont">
        <img
          src={imageUrl}
          alt={`${projectInfo.title} Poster`}
          class="projects__row-img"
          loading="lazy"
        />
      </div>
      <div class="projects__row-content">
        <h3 class="projects__row-content-title">{projectInfo.title}</h3>
        <h4 class="projects__row-content-subtitle">{projectInfo.subTitle}</h4>
        
        {(projectInfo.description !== "NA") ? (
          <p class="projects__row-content-desc">
            {projectInfo.description}
          </p>
        ) : (null)}

        {(projectInfo.url !== "NA") ? (
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