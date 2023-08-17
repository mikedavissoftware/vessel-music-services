import DaggettControlCard from "./individual-projects/DaggettControlCard"
import SpiritualDirectionCard from "./individual-projects/SpiritualDirectionCard"
import BackyardBowlsCard from "./individual-projects/BackyardBowlsCard"

import Accused from "../../../../assets/projects/accused.jpg"
import BehindTheMusic from "../../../../assets/projects/behind-the-music.jpg"
import Blackberry from "../../../../assets/projects/blackberry.jpg"
import BonesAndAll from "../../../../assets/projects/bones-and-all.jpg"
import BoschLegacy from "../../../../assets/projects/bosch-legacy.jpg"
import CreedIII from "../../../../assets/projects/creed-3.jpg"
import EltonJohn from "../../../../assets/projects/elton-john.jpg"
import MaggieMoores from "../../../../assets/projects/maggie-moore~s~.jpg"
import MendingTheLine from "../../../../assets/projects/mending-the-line.jpg"
import NowYouSeeMe from "../../../../assets/projects/now-you-see-me.jpg"
import NowYouSeeMeII from "../../../../assets/projects/now-you-see-me-2.jpg"
import PeoplePuzzler from "../../../../assets/projects/people-puzzler.jpg"
import PromPact from "../../../../assets/projects/prom-pact.jpg"
import Sweetwater from "../../../../assets/projects/sweetwater.jpg"
import TheCovenant from "../../../../assets/projects/the-covenant.jpg"
import TheExpendables from "../../../../assets/projects/the-expendables-edit.jpg"
import TheRetirementPlan from "../../../../assets/projects/the-retirement-plan.jpg"
import TheRookieFeds from "../../../../assets/projects/the-rookie-feds.jpg"
import Till from "../../../../assets/projects/till.jpg"


export default function ProjectsSection() {

  // fetch(`https://sheets.googleapis.com/v4/spreadsheets/<sheet_id>/values/<worksheet_name>/?key=${}<api_key>`)

  console.log(import.meta.env.development.VITE_API_KEY)

  return (
    <section id="projects" class="projects sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          {/* <span class="heading-sec__sub">
            Below is a selection of a my work within the music supervision industry.
          </span> */}
        </h2>

        <div class="projects__content">
          <DaggettControlCard />
          <SpiritualDirectionCard />
          <BackyardBowlsCard />
        </div>
      </div>
    </section>
  )
}