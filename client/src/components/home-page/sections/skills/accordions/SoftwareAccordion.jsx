


export default function SoftwareAccordion({ active, handleClick }) {



  return (
    <div>
      <button 
        className={`skills__content-title accordion${(active === "software-engineering") ? " active" : ""}`}
        id="software-engineering"
        onClick={handleClick}
      >Software Engineering</button>

      <div className={`panel${(active === "software-engineering") ? " active" : ""}`}>
        
        <h4 className="skills__content-subtitle">Languages</h4>
        <div className="skills">
          <div className="skills__program">HTML</div>
          <div className="skills__program">CSS</div>
          <div className="skills__program">JavaScript</div>
          <div className="skills__program">Ruby</div>
          <div className="skills__program">SQL</div>
        </div>

        <h4 className="skills__content-subtitle">Frameworks, Libraries, & Plugins</h4>
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
          <div className="skills__skill">Github</div>
          <div className="skills__skill">Wordpress</div>
          <div className="skills__skill">Node.js</div>
          <div className="skills__skill">NPM & NPX</div>
          <div className="skills__skill">PostgreSQL</div>
          <div className="skills__skill">SQLite3</div>
          <div className="skills__skill">Rails Views</div>
          <div className="skills__skill">Vite</div>
          <div className="skills__skill">Create React App</div>
          <div className="skills__skill">VS Code</div>
          <div className="skills__skill">Postman</div>
          <div className="skills__skill">Postman</div>              
        </div>

        <h4 className="skills__content-subtitle">Skills & Principles</h4>
        <div className="skills">
          <div className="skills__skill">Front End</div>
          <div className="skills__skill">Back End</div>
          <div className="skills__skill">Full Stack</div>
          <div className="skills__skill">Web Development</div>
          <div className="skills__skill">Web & UI Design</div>
          <div className="skills__skill">CRUD & Custom API's</div>
          <div className="skills__skill">RESTful Routing</div>
          <div className="skills__skill">Object-Oriented Programming</div>
          <div className="skills__skill">Version Control</div>
          <div className="skills__skill">Branch Management</div>
          <div className="skills__skill">Clean Code</div>
          <div className="skills__skill">Refactoring & Optimization</div>
          <div className="skills__skill">Disks & Cloud Storage</div>
          <div className="skills__skill">Authentication & Authorization</div>
          <div className="skills__skill">Data Validations</div>
          <div className="skills__skill">Client-Side Routing</div>
        </div>
      </div>
    </div>
  )
}