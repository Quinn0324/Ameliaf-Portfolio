import { Link } from 'react-router-dom'
import { logo, icon } from '../assets/media.js'

const EMAIL = 'ameliafrederick.401@gmail.com'
const INSTAGRAM = 'https://www.instagram.com/ameliafrederick.401/'
const LINKEDIN = 'https://www.linkedin.com/in/amélia-frédérick-b8556135a/'

export default function Footer() {
  return (
    <footer className="footer3_component">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="footer3_top-wrapper">
              <div className="footer3_left-wrapper">
                <Link to="/" className="footer3_logo-link" aria-label="Home">
                  <img src={logo['logo-horizontal-red']} alt="full red logo version" className="footer3_logo" />
                </Link>
                <div className="margin-top margin-small">
                  <h3 className="heading-style-h3">Contact:</h3>
                  <a href={`mailto:${EMAIL}`} className="text-size-large">{EMAIL}</a>
                </div>
                <div className="footer3_social-list margin-top margin-small">
                  <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="footer3_social-link" aria-label="Instagram">
                    <img src={icon['icon-instagram-red']} alt="red instagram logo" width="28" height="28" />
                  </a>
                  <a href={LINKEDIN} target="_blank" rel="noreferrer" className="footer3_social-link" aria-label="LinkedIn">
                    <img src={icon['icon-linkedin-red']} alt="red linkedin logo" width="28" height="28" />
                  </a>
                </div>
              </div>

              <div className="footer3_menu-wrapper">
                <div className="footer3_link-list">
                  <Link to="/" className="footer3_link">Home</Link>
                  <Link to="/about" className="footer3_link">About</Link>
                  <Link to="/contact" className="footer3_link">Contact</Link>
                  <Link to="/portfolio" className="footer3_link">My Work</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
