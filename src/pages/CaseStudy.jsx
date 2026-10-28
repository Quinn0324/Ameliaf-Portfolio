import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import ProcessStep from '../components/ProcessStep.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { caseStudies } from '../data/caseStudies.js'
import { img } from '../assets/media.js'

export default function CaseStudy({ slug }) {
  const cs = caseStudies[slug]
  if (!cs) return null

  return (
    <>
      <Seo title={cs.seo.title} description={cs.seo.description} ogImage={img[cs.seo.ogImage]} />

      {/* Hero */}
      <header className="section_header5 case-study">
        <div className="padding-global">
          <div className="container-large">
            <div className="header5_content center">
              <div className="padding-section-large">
                <div className="max-width-medium">
                  <div className="margin-bottom margin-small">
                    <h1 className="heading-style-h2 reversed centered">{cs.title}</h1>
                    <p className="text-size-regular reversed centered">{cs.heroPara}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="header5_background-image-wrapper">
              <div className="image-overlay-layer" />
              <img
                src={img[cs.heroImage]}
                alt={cs.heroAlt}
                className="header5_background-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Challenge + Key Goals */}
      <section className="section_cta27 text-color-white challenge-goals">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large flex mobile">
              <div className="cta27_component">
                <div className="text-align-left">
                  <div className="max-width-large align-center">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-style-h2 reversed">{cs.challenge.heading}</h2>
                      <p className="text-size-regular reversed margin-top">{cs.challenge.body}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cta27_component">
                <div className="text-align-left">
                  <div className="max-width-large align-center">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-style-h2 reversed">{cs.goals.heading}</h2>
                      <p className="text-size-regular reversed">
                        {cs.goals.lines.map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < cs.goals.lines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta27_background-image-wrapper">
          <div className="image-overlay-layer red" />
          <img className="cta27_background-image" src={img['placeholder-image']} alt="" />
        </div>
      </section>

      {/* Process steps */}
      {cs.steps.map((step, i) => (
        <ProcessStep key={i} step={step} />
      ))}

      {/* Conclusion */}
      <header className="section_header15">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="header15_component">
                <div className="margin-bottom margin-xxlarge">
                  <Reveal from="up" className="header15_content-wrapper">
                    <div className="header15_content-left">
                      <h1 className="heading-style-h2">{cs.conclusion.heading}</h1>
                    </div>
                    <div className="header15_content-right">
                      <p className="text-size-regular">{cs.conclusion.body}</p>
                    </div>
                  </Reveal>
                </div>
                <div className="header15_image-wrapper shadow-large">
                  <img
                    src={img[cs.conclusion.image]}
                    alt={cs.conclusion.alt}
                    className="header15_image"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <CtaBanner />
    </>
  )
}
