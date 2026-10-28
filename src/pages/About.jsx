import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { img } from '../assets/media.js'

const fiveWs = [
  { h: 'Who', p: "The one who's always asking why. I'm Amélia, a designer who looks past the obvious, is curious about how people see, feel, and connect through visuals" },
  { h: 'What', p: 'I work across typography, print, branding, web, and any graphic design you could need. Creating thoughtful visual systems that tell stories and leave a lasting impression.' },
  { h: 'Where', p: 'Currently based in Canada, in Ottawa, Ontario. Though most of my work lives somewhere between structure and imagination.' },
  { h: 'Why', p: 'Because design lets me slow things down. To notice the details, question the obvious and turn small thoughts into something worth looking at twice.' },
  { h: 'How', p: 'With intention, curiosity, and way too many refinements. I design through exploration, testing, adjusting, and trusting that moment when it finally feels right. ' },
]

const skills = [
  { h: 'Problem Solving', p: "I like figuring things out. Asking questions, chasing ideas, and finding creative ways to make them work. I'm good at untangling challenges and turning them into clear thoughtful design solutions." },
  { h: 'Print', p: 'I have a soft spot for things you can hold. From picking the typeface, to layout, to finish, I enjoy shaping print pieces that feel intentional and alive. ' },
  { h: 'Branding', p: "I'm drawn to how design shapes identity. I create brands with character, and personality, ones that feel distinct, consistent, and instantly recognizable. " },
  { h: 'Organization & Detail', p: 'Every pixel, every paragraph, every plan. I like keeping things in order while letting creativity flow. Being organized helps me shape ideas, and turn playful, chaotic sparks, into thoughtful and intentional design.' },
  { h: 'Versatility', p: 'From print, to branding, to web, to UX/UI, to motion. I can stretch into anything when the project calls for it. I love exploring new tools, discovering new ways of thinking and experimenting. ' },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Amélia Frédérick | Graphic Designer"
        description="A designer who builds through curiosity, precision, and creative exploration. Committed to making both thoughtful and expressive design."
        ogImage={img['open-graph-about']}
      />

      {/* Hero + photo collage */}
      <header className="section_header107">
        <div className="header107_component">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-top padding-xhuge">
                <div className="max-width-large">
                  <div className="margin-bottom margin-small">
                    <h1 className="heading-style-h1">
                      Curiosity, creativity, and chaos.<br />That's me!
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Reveal from="up" className="header107_content-bottom">
            <div className="header107_image-list">
              <div className="header107_image-group-left">
                <div className="header107_image-wrapper is-image1 shadow-medium">
                  <img src={img['me-crazy-hair']} alt="Amélia with glasses and red hair spread out, wearing a white knit sweater indoors." className="header107_image1" loading="eager" />
                </div>
                <div className="header107_small-image-group">
                  <div className="header107_image-wrapper is-image2 shadow-medium">
                    <img src={img['me-climbing']} alt="Amélia sitting atop an indoor climbing wall giving two thumbs up." className="header107_image2" loading="eager" />
                  </div>
                  <div className="header107_image-wrapper is-image3 shadow-medium">
                    <img src={img['me-bleed']} alt="Amélia building a physical piece to then make it a typography piece." className="header107_image3" loading="eager" />
                  </div>
                </div>
                <div className="header107_image-wrapper is-image4 shadow-medium">
                  <img src={img['me-in-lizard']} alt="Amélia crouching and laughing inside the open mouth of a large lizard sculpture in a museum exhibit." className="header107_image4" loading="eager" />
                </div>
              </div>
              <div className="header107_image-wrapper is-image5 shadow-medium">
                <img src={img['me-and-shark']} alt="Amélia smiling and looking up at a large shark swimming above her in an aquarium tunnel." className="header107_image5" loading="eager" />
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* The 5 Ws — image left */}
      <section className="section_layout34">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="layout34_component">
                <Reveal from="up" className="layout34_content mobile">
                  <div className="layout34_image-wrapper shadow-medium">
                    <img src={img['me']} alt="Picture of Amélia close up" className="layout34_image" loading="lazy" />
                  </div>
                  <div className="layout34_content-left">
                    <div className="layout34_item-list">
                      {fiveWs.map((item) => (
                        <div key={item.h} className="layout34_item">
                          <div className="layout34_item-text-wrapper">
                            <div className="margin-bottom margin-xsmall">
                              <h3 className="heading-style-h3">{item.h}</h3>
                            </div>
                            <p className="text-size-regular">{item.p}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Skills — image right */}
      <section className="section_layout34 left">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="layout34_component">
                <Reveal from="up" className="layout34_content mobile">
                  <div className="layout34_content-left">
                    <div className="layout34_item-list">
                      <div className="layout34_item mobile">
                        <div className="layout34_item-text-wrapper">
                          <div className="margin-bottom margin-xsmall">
                            <h3 className="heading-style-h2">My Skills</h3>
                          </div>
                        </div>
                      </div>
                      {skills.map((item) => (
                        <div key={item.h} className="layout34_item">
                          <div className="layout34_item-text-wrapper">
                            <div className="margin-bottom margin-xsmall">
                              <h3 className="heading-style-h3">{item.h}</h3>
                            </div>
                            <p className="text-size-regular">{item.p}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="layout34_image-wrapper shadow-medium">
                    <img src={img['me-stage']} alt="Amélia painting and creating the scene of a high school musical theatre show." className="layout34_image" loading="lazy" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
