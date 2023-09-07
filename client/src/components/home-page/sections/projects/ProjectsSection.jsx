import AccusedCard from "./individual-projects/AccusedCard"
import BehindTheMusicCard from "./individual-projects/BehindTheMusicCard"
import BehindTheMusicTile from "./individual-projects/BehindTheMusicTile"
import BlackberryCard from "./individual-projects/BlackberryCard"
import BonesAndAllCard from "./individual-projects/BonesAndAllCard"
import BoschLegacyCard from "./individual-projects/BoschLegacyCard"
import CreedIIICard from "./individual-projects/CreedIIICard"
import EltonJohnCard from "./individual-projects/EltonJohnCard"
import HennessyCard from "./individual-projects/HennessyCard"
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
import WomenTalkingCard from "./individual-projects/WomenTalkingCard"

import ProjectCard from "./individual-projects/BehindTheMusicCard"

export default function ProjectsSection() {

  // fetch(`https://sheets.googleapis.com/v4/spreadsheets/<sheet_id>/values/<worksheet_name>/?key=${}<api_key>`)

  // console.log(import.meta.env.development.VITE_API_KEY)

  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Featured Works</span>
          {/* <span className="heading-sec__sub">
            Below is a selection of a my work within the music supervision industry.
          </span> */}
        </h2>
        
        <h3 className="projects-category">TELEVISION</h3>
        <div className="projects__content">
          <BehindTheMusicCard />
        </div>

        <div className="projects-tiles-cont">
          <BehindTheMusicTile />
          <BehindTheMusicTile />
          <BehindTheMusicTile />
        </div>
        <hr className="secondary"/>

        <h3 className="projects-category">TRAILERS</h3>
        <div className="projects__content">
          <TheRetirementPlanCard />
          <MaggieMooresCard />
          <BoschLegacyCard />
          <AccusedCard />
          <MendingTheLineCard />
          <SweetwaterCard />
          <NowYouSeeMeCard />
          <NowYouSeeMeIICard />
          <PromPactCard />
          <BlackberryCard />
        </div>
        <hr className="secondary"/>

        <h3 className="projects-category">FILM & TV MARKETING</h3>
        <div className="projects__content">
          <CreedIIICard />
          <TillCard />
          <WomenTalkingCard />
          <BonesAndAllCard />
          <TheCovenantCard />
          <TheExpendablesCard />
          <PeoplePuzzlerCard />
          <TheRookieFedsCard />
        </div>
        <hr className="secondary"/>

        <h3 className="projects-category">ADVERTISING</h3>
        <div className="projects__content">
          <HennessyCard />
        </div>
        <hr className="secondary"/>

        <h3 className="projects-category">LIVE</h3>
        <div className="projects__content">
          <EltonJohnCard />
        </div>
      </div>
    </section>
  )
}