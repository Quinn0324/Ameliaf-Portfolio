import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { img } from '../assets/media.js'

const inert = (e) => e.preventDefault()

// 10 gallery items in exact DOM order (drives the CSS-columns masonry flow).
const works = [
  { key: 'newsletter', cls: 'gallery10_image1', alt: 'Open culinary magazine titled Culinary Creations featuring a cranberry spinach salad recipe on one page and kitchen safety tips on the other.' },
  { key: 'moog-poster', cls: 'gallery10_image1', alt: 'Poster for MOOG Infinity Enteral Feeding Pump showing discreet design, customization features, and two people modeling teal and gray pump pouches.' },
  { key: 'branding-guide', cls: 'gallery10_image2', alt: "Two stacked white booklets titled 'TMS Life Branding Guide 2025' with a green abstract logo on the cover." },
  { key: 'home-depot', cls: 'gallery10_image3', alt: "Smartphone displaying a home improvement store's shopping app with categories Appliances, Decor & Furniture, and Doors & Windows." },
  { key: 'brochure-2', cls: 'gallery10_image5', alt: 'Tri-fold brochure for Loft & Vine Florist featuring floral images, contact details, and service descriptions.' },
  { key: 'earth', cls: 'gallery10_image4', alt: "Laptop displaying a forest scene with text 'Breathe new air' on the screen." },
  { key: 'horriflick', cls: 'gallery10_image5', alt: "Black smartphone floating above a round maroon pedestal, screen displaying white letters 'HF' on a maroon background." },
  { key: 'rotoscope', cls: 'gallery10_image5', alt: 'Laptop on white desk displaying a minimalistic illustration of a penguin with a gold chain on a neutral background.' },
  { key: 'infographic', cls: 'gallery10_image6', alt: "Infographic titled 'How Ocean Pollution Affects Humans' with statistics, causes, and timelines of plastic degradation in water." },
  { key: 'bleed', cls: 'gallery10_image7', alt: "Open magazine spread showing an article titled 'When Typography Speaks Louder Than Words' with blood splatter design and the word 'BLEED' carved into skin on the left page." },
]

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio Amélia Frédérick | Graphic Designer"
        description="Browse a collection of projects that explore type, print, branding, motion, UX/UI design, and creative designs. Each designed with intent and personality."
        ogImage={img['open-graph-work']}
      />

      {/* Header */}
      <header className="section_header23">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="header23_component">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <div className="margin-bottom margin-small">
                      <h1 className="heading-style-h1">I make cool stuff! Check it out :)</h1>
                    </div>
                    <div className="margin-top margin-medium">
                      <div className="button-group is-center">
                        <Link to="/contact" className="button">I want one!</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Masonry gallery */}
      <section className="section_gallery10">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="gallery10_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="text-align-center">
                    <div className="max-width-large align-center" />
                  </div>
                </div>
                <div className="gallery10_list">
                  {works.map((w, i) => (
                    <a key={i} href="#" onClick={inert} className="gallery10_lightbox-link shadow-medium">
                      <div className="gallery10_image-wrapper">
                        <img src={img[w.key]} alt={w.alt} className={w.cls} loading="lazy" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
