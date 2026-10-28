import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import { img, icon } from '../assets/media.js'

const EMAIL = 'ameliafrederick.401@gmail.com'
const INSTAGRAM = 'https://www.instagram.com/ameliafrederick.401/'
const LINKEDIN = 'https://www.linkedin.com/in/amélia-frédérick-b8556135a/'

const topics = [
  { value: '', label: 'Select one...' },
  { value: 'First', label: 'I want to work with you!' },
  { value: 'Second', label: 'I have a question for you!' },
  { value: 'Third', label: 'Something  else!' },
]

const describes = [
  'Up-coming/New business',
  'Employer',
  'Business needing rebrand',
  'Student',
  'Freelancer',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', topic: '', describe: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const topicLabel = topics.find((t) => t.value === form.topic)?.label ?? ''
    const subject = `Website inquiry from ${form.firstName} ${form.lastName}`.trim()
    const body = [
      `First name: ${form.firstName}`,
      `Last name: ${form.lastName}`,
      `Email: ${form.email}`,
      `Phone number: ${form.phone}`,
      `Topic: ${topicLabel}`,
      `Which best describes you: ${form.describe}`,
      '',
      'Message:',
      form.message,
    ].join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <>
      <Seo
        title="Contact Amélia Frédérick | Graphic Designer"
        description="For project inquiries, collaborations, or design opportunities. A direct way to reach the designer behind the work."
        ogImage={img['open-graph-contact']}
      />

      {/* Hero banner */}
      <header className="section_header5">
        <div className="padding-global">
          <div className="container-large">
            <div className="header5_content left">
              <div className="padding-section-large">
                <div className="max-width-medium">
                  <div className="margin-bottom margin-small">
                    <h1 className="heading-style-h1 reversed mobile">Let's satisfy your curiosity together.</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="header5_background-image-wrapper">
              <div className="image-overlay-layer" />
              <img
                src={img['me-climbing']}
                alt="Amélia sitting atop an indoor climbing wall giving two thumbs up."
                className="header5_background-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Contact form */}
      <section className="section_contact2">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="contact2_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="text-align-center">
                    <div className="max-width-large align-center">
                      <div className="margin-bottom margin-small">
                        <h2 className="heading-style-h2">Curious to know more?</h2>
                      </div>
                      <p className="text-size-regular">Fill out the form and start the conversation today!</p>
                    </div>
                  </div>
                </div>
                <div className="max-width-large align-center">
                  <div className="contact2_form-block">
                    {submitted ? (
                      <div className="form_message-success-wrapper" style={{ display: 'block' }}>
                        <div className="success-text">Thank you! Your submission has been received!</div>
                      </div>
                    ) : (
                      <form name="wf-form-Contact-2-Form" onSubmit={handleSubmit} className="contact2_form">
                        <div className="form_field-2col">
                          <div className="form_field-wrapper">
                            <label htmlFor="Contact-2-First-Name-2" className="form_field-label">First name</label>
                            <input id="Contact-2-First-Name-2" name="Contact-2-First-Name" maxLength={256} type="text" required value={form.firstName} onChange={set('firstName')} className="form_input" />
                          </div>
                          <div className="form_field-wrapper">
                            <label htmlFor="Contact-2-Last-Name" className="form_field-label">Last name</label>
                            <input id="Contact-2-Last-Name" name="Contact-2-Last-Name" maxLength={256} type="text" required value={form.lastName} onChange={set('lastName')} className="form_input" />
                          </div>
                        </div>

                        <div className="form_field-2col is-mobile-1col">
                          <div className="form_field-wrapper">
                            <label htmlFor="Contact-2-Email-2" className="form_field-label">Email</label>
                            <input id="Contact-2-Email-2" name="Contact-2-Email-2" maxLength={256} type="email" required value={form.email} onChange={set('email')} className="form_input" />
                          </div>
                          <div className="form_field-wrapper">
                            <label htmlFor="Contact-2-Phone" className="form_field-label">Phone number</label>
                            <input id="Contact-2-Phone" name="Contact-2-Phone" maxLength={256} type="tel" required value={form.phone} onChange={set('phone')} className="form_input" />
                          </div>
                        </div>

                        <div className="form_field-wrapper">
                          <label htmlFor="Contact-2-Select" className="form_field-label">Choose a topic</label>
                          <select id="Contact-2-Select" name="Contact-2-Select" required value={form.topic} onChange={set('topic')} className="form_input is-select-input">
                            {topics.map((t) => (
                              <option key={t.label} value={t.value}>{t.label}</option>
                            ))}
                          </select>
                        </div>

                        <div className="form_field-wrapper">
                          <div className="margin-bottom margin-xsmall">
                            <label className="form_field-label">Which best describes you?</label>
                          </div>
                          <div className="form_radio-2col">
                            {describes.map((d) => (
                              <label key={d} className="form_radio">
                                <input type="radio" name="Contact-2-Radio" value={d} checked={form.describe === d} onChange={set('describe')} />
                                <span className="form_radio-label">{d}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="form_field-wrapper">
                          <label htmlFor="Contact-2-Message" className="form_field-label">Message</label>
                          <textarea id="Contact-2-Message" name="Contact-2-Message" maxLength={5000} placeholder="Type your message..." required value={form.message} onChange={set('message')} className="form_input is-text-area" />
                        </div>

                        <input type="submit" className="button" value="Send" />
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to reach me */}
      <section className="section_contact20">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="contact20_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="text-align-center">
                    <div className="max-width-large align-center">
                      <div className="margin-bottom margin-small">
                        <h2 className="heading-style-h2 reversed">Ways to reach me</h2>
                      </div>
                      <p className="text-size-regular reversed">Send a message on these and I'll get back to you as soon as possible!</p>
                    </div>
                  </div>
                </div>
                <div className="contact20_grid-list">
                  {/* Email */}
                  <div className="contact20_item">
                    <div className="margin-bottom margin-small">
                      <div className="contact20_icon-wrapper">
                        <a href={`mailto:${EMAIL}`} className="w-inline-block">
                          <img src={icon['icon-email-white']} alt="" className="contact20_icon" loading="lazy" />
                        </a>
                      </div>
                    </div>
                    <div className="margin-bottom margin-xsmall">
                      <a href={`mailto:${EMAIL}`}><h3 className="heading-style-h4 reversed">Email</h3></a>
                    </div>
                    <div className="margin-top margin-small">
                      <a href={`mailto:${EMAIL}`} className="text-style-link reversed">{EMAIL}</a>
                    </div>
                  </div>
                  {/* LinkedIn */}
                  <div className="contact20_item">
                    <div className="margin-bottom margin-small">
                      <div className="contact20_icon-wrapper">
                        <a href={LINKEDIN} target="_blank" rel="noreferrer" className="w-inline-block">
                          <img src={icon['icon-linkedin-white']} alt="" className="contact20_icon" loading="lazy" />
                        </a>
                      </div>
                    </div>
                    <div className="margin-bottom margin-xsmall">
                      <a href={LINKEDIN} target="_blank" rel="noreferrer"><h3 className="heading-style-h4 reversed">Linkedin</h3></a>
                    </div>
                    <div className="margin-top margin-small">
                      <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-style-link reversed">Amélia Frédérick</a>
                    </div>
                  </div>
                  {/* Instagram */}
                  <div className="contact20_item">
                    <div className="margin-bottom margin-small">
                      <div className="contact20_icon-wrapper">
                        <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="w-inline-block">
                          <img src={icon['icon-instagram-white']} alt="" className="contact20_icon" loading="lazy" />
                        </a>
                      </div>
                    </div>
                    <div className="margin-bottom margin-xsmall">
                      <a href={INSTAGRAM} target="_blank" rel="noreferrer"><h3 className="heading-style-h4 reversed">Instagram</h3></a>
                    </div>
                    <div className="margin-top margin-small">
                      <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="text-style-link reversed">ameliafrederick.401</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
