import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { img } from '../assets/media.js'

const inert = (e) => e.preventDefault()

export default function Home() {
  return (
    <>
      <Seo
        title="Amélia Frédérick | Graphic Designer"
        description="A portfolio exploring design through a process fueled by curiosity. Work built from detail, and experimentation, turning ideas into something real."
        ogImage={img['open-graph-home']}
      />

      {/* Hero */}
      <header className="section_header129">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="header129_component">
                <div className="header129_content">
                  <Reveal from="left" className="header129_content-left">
                    <div className="margin-bottom margin-small">
                      <h1 className="heading-style-h1 home-hero">
                        Hi! I'm Amélia, a designer who designs with curiosity, creativity, and a genuine love for what I do.{' '}
                      </h1>
                    </div>
                    <div className="margin-top margin-medium">
                      <div className="button-group">
                        <Link to="/contact" className="button">Let's Chat!</Link>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal from="right" className="header129_image-group">
                    <div className="header129_image-wrapper2 shadow-small">
                      <img
                        src={img['me-stage']}
                        alt="Amélia painting and creating the scene of a high school musical theatre show."
                        className="header129_image3"
                        loading="eager"
                      />
                    </div>
                    <div className="header129_image-wrapper1 shadow-medium">
                      <img
                        src={img['me-goat']}
                        alt="Amélia crouching near a wire fence interacting with a brown and white goat."
                        className="header129_image1"
                        loading="eager"
                      />
                    </div>
                    <div className="header129_image-wrapper3 shadow-small">
                      <img
                        src={img['me']}
                        alt="Picture of Amélia close up"
                        className="header129_image2"
                        loading="eager"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Statement banner */}
      <header className="section_header5 text-color-white">
        <div className="padding-global">
          <div className="container-large">
            <div className="header5_content">
              <div className="padding-section-large">
                <div className="max-width-medium">
                  <div className="margin-bottom margin-small">
                    <h1 className="heading-style-h3 reversed">
                      I believe curiosity sparks the best ideas. I design for more than just visuals. I design to discover new possibilities, solve problems and tell stories. Each design is unique and that's why I bring a little chaos into each of my designs. Every little detail matters to me and that's why I'm thorough, precise, and meticulous in all that I do.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="header5_background-image-wrapper">
              <div className="image-overlay-layer home" />
              <img
                src={img['open-graph-home']}
                alt="Amélia with red hair spread out, wearing glasses and a cream knit sweater, indoors with a red overlay"
                className="header5_background-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>

      {/* My Work gallery */}
      <section className="section_gallery8">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="gallery8_component">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-style-h2">My Work</h2>
                    </div>
                  </div>
                </div>
                <div className="gallery8_list">
                  <a href="#" onClick={inert} className="gallery8_lightbox-link">
                    <div className="gallery8_image-wrapper-large shadow-medium">
                      <img
                        src={img['branding-guide']}
                        alt="Two stacked white booklets titled 'TMS Life Branding Guide 2025' with a green abstract logo on the cover."
                        className="gallery8_image4"
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <a href="#" onClick={inert} className="gallery8_lightbox-link">
                    <div className="gallery8_image-wrapper shadow-medium">
                      <img
                        src={img['brochure']}
                        alt="Two folded brochures for Loft & Vine Florist featuring a smiling woman holding flowers with text about transforming your world with the perfect bloom."
                        className="gallery8_image3"
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <a href="#" onClick={inert} className="gallery8_lightbox-link">
                    <div className="gallery8_image-wrapper shadow-medium">
                      <img
                        src={img['watsons-card']}
                        alt="watson's farm business card"
                        className="gallery8_image2"
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <a href="#" onClick={inert} className="gallery8_lightbox-link">
                    <div className="gallery8_image-wrapper-large shadow-medium">
                      <img
                        src={img['newsletter']}
                        alt="Open culinary magazine titled Culinary Creations featuring a cranberry spinach salad recipe on one page and kitchen safety tips on the other."
                        className="gallery8_image1"
                        loading="lazy"
                      />
                    </div>
                  </a>
                </div>
                <div className="margin-top margin-large">
                  <div className="button-group is-center">
                    <Link to="/portfolio" className="button">See More!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        bgImage={img['open-graph-home']}
        bgAlt="Amélia with red hair spread out, wearing glasses and a cream knit sweater, indoors with a red overlay"
      />
    </>
  )
}
