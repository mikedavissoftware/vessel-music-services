import AccusedCard from "./individual-projects/AccusedCard"
import BehindTheMusicCard from "./individual-projects/BehindTheMusicCard"
import BlackberryCard from "./individual-projects/BlackberryCard"
import BonesAndAllCard from "./individual-projects/BonesAndAllCard"
import BoschLegacyCard from "./individual-projects/BoschLegacyCard"
import CreedIIICard from "./individual-projects/CreedIIICard"
import EltonJohnCard from "./individual-projects/EltonJohnCard"
import MaggieMooresCard from "./individual-projects/MaggieMooresCard"
import MendingTheLineCard from "./individual-projects/MendingTheLineCard"
import NowYouSeeMeCard from "./individual-projects/NowYouSeeMeCard"
import NowYouSeeMeIICard from "./individual-projects/NowYouSeeMeIICard"
import PeoplePuzzlerCard from "./individual-projects/PeoplePuzzlerCard"
import PromPactCard from "./individual-projects/PromPactCard"
import SweetwaterCard from "./individual-projects/SweetwaterCard"
import TheCovenantCard from "./individual-projects/TheCovenantCard"
import TheExpendablesCard from "./individual-projects/TheExpendablesCard"
import TheRetirementPlanCard from "./individual-projects/TheRetirementPlanCard"
import TheRookieFedsCard from "./individual-projects/TheRookieFedsCard"
import TillCard from "./individual-projects/TillCard"

import ProjectCard from "./individual-projects/BehindTheMusicCard"

export default function ProjectsSection() {

  // fetch(`https://sheets.googleapis.com/v4/spreadsheets/<sheet_id>/values/<worksheet_name>/?key=${}<api_key>`)

  // console.log(import.meta.env.development.VITE_API_KEY)

  return (
    <section id="projects" class="projects sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          {/* <span class="heading-sec__sub">
            Below is a selection of a my work within the music supervision industry.
          </span> */}
        </h2>
        
        <h3 class="projects-category">TELEVISION</h3>
        <div class="projects__content">
          <BehindTheMusicCard />
        </div>
        <hr class="secondary"/>

        <h3 class="projects-category">TRAILERS</h3>
        <div class="projects__content">
          <TheRetirementPlanCard />
          <MaggieMooresCard />
          <BoschLegacyCard />
          <AccusedCard />
          <MendingTheLineCard />
          <SweetwaterCard />
          <h2>Missing Measure of Revenge poster</h2>
          <NowYouSeeMeCard />
          <NowYouSeeMeIICard />
          <PromPactCard />
          <BlackberryCard />
        </div>
        <hr class="secondary"/>

        <h3 class="projects-category">FILM & TV MARKETING</h3>
        <div class="projects__content">
          <CreedIIICard />
          <TillCard />
          <h2>Missing Women Talking poster</h2>
          <BonesAndAllCard />
          <TheCovenantCard />
          <TheExpendablesCard />
          <PeoplePuzzlerCard />
          <TheRookieFedsCard />
        </div>
        <hr class="secondary"/>

        <h3 class="projects-category">ADVERTISING</h3>
        <div class="projects__content">
          <h2>Missing Hennessy poster</h2>
        </div>
        <hr class="secondary"/>

        <h3 class="projects-category">LIVE</h3>
        <div class="projects__content">
          <EltonJohnCard />
        </div>
      </div>
    </section>
  )
}