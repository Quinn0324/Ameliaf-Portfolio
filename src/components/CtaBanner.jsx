import { Link } from 'react-router-dom'
import { img } from '../assets/media.js'

// Shared section_cta27 band ("Start the Creation!"). The red overlay is opaque,
// so the background image sits behind it exactly as on the live site.
export default function CtaBanner({ bgImage = img['placeholder-image'], bgAlt = '' }) {
  return (
    <section className="section_cta27 text-color-white">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="cta27_component">
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <div className="margin-bottom margin-small">
                    <h2 className="heading-style-h2 reversed">
                      Curious about what we could make together? Don't be shy, let's chat!
                    </h2>
                  </div>
                </div>
              </div>
              <div className="margin-top margin-medium">
                <div className="button-group is-center">
                  <Link to="/contact" className="button is-alternate">Start the Creation!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta27_background-image-wrapper">
        <div className="image-overlay-layer red" />
        <img className="cta27_background-image" src={bgImage} alt={bgAlt} />
      </div>
    </section>
  )
}
