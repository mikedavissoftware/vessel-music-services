import { useState } from "react";



export default function ContactSection() {

  const [success, setSuccess] = useState(false)

  const newForm = {
    name: "",
    email: "",
    message: ""
  }
  const [formData, setFormData] = useState(newForm)

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    fetch("https://public.herotofu.com/v1/fde317b0-3d15-11ee-b184-4bfb587b2c20", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
    setSuccess(true)
    setFormData(newForm)
  }

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">

        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            We're always happy to connect with someone new! If you're interested in collaborating or simply getting to know us better, please use the form below and we'll be in touch!
          </span>
        </h2>

        <div className="contact__form-container">
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-field">
              <label className="contact__form-label" for="name">Name</label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" for="email">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="text"
                className="contact__form-input"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" for="message">Message</label>
              <textarea
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn--theme contact__btn">
              Submit
            </button>

            {(success) ? (
              <>
                <hr classNameName="secondary"/>
                <p classNameName="heading-sec__sub">Contact form successfully delivered! We will be in touch. If you don't receive a response within a week, please reach out on <a href="" target="_blank">Instagram</a>!</p>
              </>
            ) : (
              null
            )}
          </form>
        </div>

      </div>
    </section>
  )
}