import { useState } from "react";



export default function ContactSection() {

  const newForm = {
    name: "",
    email: "",
    message: ""
  }

  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState(newForm)

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    emailjs.send("mds_gmail", "contact_form_vms", formData, import.meta.env.VITE_CONTACT_FORM_KEY)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      setFormData(newForm)
      setSuccess(true)
    }, function(error) {
      console.log('FAILED...', error);
      setSuccess(false)
    });
  }

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">

        {/* <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            We're always happy to connect with someone new! If you're interested in collaborating or simply getting to know us better, please send an email to <strong style={{textDecoration: "underline"}}><a href="mailto:caleb@vesselsound.com" target="_blank">caleb@vesselsound.com</a></strong>.
          </span>
        </h2> */}

        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            We're always happy to connect with someone new! If you're interested in collaborating or simply getting to know us better, please use the contact form below.
          </span>
        </h2>

        <div className="contact__form-container">
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">Name</label>
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
              <label className="contact__form-label" htmlFor="email">Email</label>
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
              <label className="contact__form-label" htmlFor="message">Message</label>
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
                <hr className="secondary"/>
                <p className="heading-sec__sub" style={{color: "#3edf3e"}}>Contact form successfully delivered! We will be in touch. If you don't receive a response within a week, please reach out on <a href="https://www.instagram.com/vessel.sound/" target="_blank">Instagram</a>!</p>
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