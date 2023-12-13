


export default function EntrepreneurshipAccordion({ active, handleClick }) {



  return (
    <div>
      <button 
        className={`skills__content-title accordion${(active === "entrepreneurship-and-business") ? " active" : ""}`}
        id="entrepreneurship-and-business"
        onClick={handleClick}
      >Entrepreneurship & Business Development</button>

      <div className={`panel${(active === "entrepreneurship-and-business") ? " active" : ""}`}>

        <h4 className="skills__content-subtitle">Industries</h4>
        <div className="skills">
          <div className="skills__program">Music Industry</div>
          <div className="skills__program">501(c)(3) Nonprofit Organizations</div>
          <div className="skills__program">Freelance Media Production</div>
          <div className="skills__program">Independent Film Industry</div>
          <div className="skills__program">Live Event Production</div>
        </div>

        <h4 className="skills__content-subtitle">Music Industry</h4>
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

        <h4 className="skills__content-subtitle">Nonprofit Organizations</h4>
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