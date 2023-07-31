


export default function MusicAccordion({ active, handleClick }) {



  return (
    <div>
      <button 
        className={`skills__content-title accordion${(active === "music-composition-and-performance") ? " active" : ""}`}
        id="music-composition-and-performance"
        onClick={handleClick}
      >Music Composition & Performance</button>

      <div className={`panel${(active === "music-composition-and-performance") ? " active" : ""}`}>

        <h4 className="skills__content-subtitle">Instruments</h4>
        <div className="skills">
          <div className="skills__program">Drums & Percussion</div>
          <div className="skills__program">Electric & Acoustic Guitar</div>
          <div className="skills__program">Electric Bass Guitar</div>
          <div className="skills__program">Vocal</div>
          <div className="skills__program">Piano & Keys</div>
          <div className="skills__program">Mandolin</div>
          <div className="skills__program">Sampling & Sound Manipulation</div>
          <div className="skills__program">Piano & Keys</div>
        </div>

        <h4 className="skills__content-subtitle">Music Composition & Writing</h4>
        <div className="skills">
          <div className="skills__skill">React</div>
          <div className="skills__skill">Redux</div>
          <div className="skills__skill">Ruby on Rails</div>
          <div className="skills__skill">Rails Admin</div>
          <div className="skills__skill">SASS</div>
          <div className="skills__skill">Tailwind CSS</div>
          <div className="skills__skill">Daisy UI</div>
          <div className="skills__skill">Semantic UI</div>
        </div>

        <h4 className="skills__content-subtitle">Platforms, Environments, & Other Tools</h4>
        <div className="skills">
          <div className="skills__skill">Git</div>
          <div className="skills__skill">Wordpress</div>
          <div className="skills__skill">Node.js</div>
          <div className="skills__skill">PostgreSQL</div>
          <div className="skills__skill">SQLite3</div>
          <div className="skills__skill">Rails Views</div>
          <div className="skills__skill">Vite</div>
          <div className="skills__skill">Create React App</div>
          <div className="skills__skill">VS Code</div>
          <div className="skills__skill">Postman</div>
          <div className="skills__skill">Postman</div>              
        </div>

      </div>
    </div>
  )
}