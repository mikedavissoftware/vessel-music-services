import DaggettControlProject from "./individual-projects/DaggettControlProject"
import SpiritualDirectionProject from "./individual-projects/SpiritualDirectionProject"
import BackyardBowlsProject from "./individual-projects/BackyardBowlsProject"


export default function ProjectsSection() {



  return (
    <section id="projects" class="projects sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <span class="heading-sec__sub">
            Below is a selection of a few of my recent projects in the realm of web development. Feel free to check them out and explore their individual case studies for more in-depth information!
          </span>
        </h2>

        <div class="projects__content">
          <DaggettControlProject />
          <SpiritualDirectionProject />
          <BackyardBowlsProject />
        </div>
      </div>
    </section>
  )
}