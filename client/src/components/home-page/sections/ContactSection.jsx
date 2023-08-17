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
    }).then((r) => {
      setSuccess(true)
      console.log(r)
    });
  }

  return (
    <section id="contact" class="contact sec-pad dynamicBg">
      <div class="main-container">

        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main heading-sec__main--lt">Contact</span>
          <span class="heading-sec__sub heading-sec__sub--lt">
            I'm always happy to connect with someone new! If you're interested in collaborating or simply getting to know me better, please use the form below and I'll be in touch!
          </span>
        </h2>

        <div class="contact__form-container">
          <form onSubmit={handleSubmit} class="contact__form">
            <div class="contact__form-field">
              <label class="contact__form-label" for="name">Name</label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                class="contact__form-input"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="email">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="text"
                class="contact__form-input"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="message">Message</label>
              <textarea
                required
                cols="30"
                rows="10"
                class="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" class="btn btn--theme contact__btn">
              Submit
            </button>

            {(success) ? (
              <>
                <hr className="secondary"/>
                <p className="heading-sec__sub">Contact form successfully delivered! We will be in touch. If you don't receive a response within a week, please reach out on <a href="" target="_blank">Instagram</a>!</p>
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