import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { logo } from '../assets/media.js'

const Chevron = () => (
  <svg className="navbar11_dropdown-icon" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
    <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu + accordion whenever the route changes.
  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  const linkClass = ({ isActive }) =>
    'navbar11_link' + (isActive ? ' w--current' : '')

  const onPortfolio = ['/portfolio', '/cs1', '/cs2', '/cs3'].includes(location.pathname)

  return (
    <header className="navbar11_component">
      <div className="navbar11_container">
        <Link to="/" className="navbar11_logo-link" aria-label="Home">
          <img
            src={logo['logo-symbol-white']}
            alt="white version of ameliaf design logo"
            className="navbar11_logo"
          />
        </Link>

        <nav className={'navbar11_menu' + (menuOpen ? ' is-open' : '')}>
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          <div className="navbar11_menu-dropdown">
            <div className="navbar11_dropdown-toggle">
              <Link
                to="/portfolio"
                className={'navbar11_link' + (onPortfolio ? ' w--current' : '')}
                style={{ padding: 0 }}
              >
                My Work
              </Link>
              <button
                type="button"
                className="navbar11_dropdown-chevron"
                aria-label="Toggle case studies"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((v) => !v)}
                style={{ background: 'transparent', border: 0, color: 'inherit', cursor: 'pointer', padding: 0, display: 'flex' }}
              >
                <Chevron />
              </button>
            </div>
            <nav className={'navbar11_dropdown-list' + (dropdownOpen ? ' is-open' : '')}>
              <div className="navbar11_dropdown-link-list">
                <Link to="/cs1" className="navbar11_dropdown-link text-weight-semibold">Case Study 1</Link>
                <Link to="/cs2" className="navbar11_dropdown-link text-weight-semibold">Case Study 2</Link>
                <Link to="/cs3" className="navbar11_dropdown-link text-weight-semibold">Case Study 3</Link>
              </div>
            </nav>
          </div>

          <div className="navbar11_menu-buttons">
            <Link to="/contact" className="button is-small is-alternate nav">Curious?</Link>
          </div>
        </nav>

        <button
          type="button"
          className={'navbar11_menu-button' + (menuOpen ? ' is-open' : '')}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <div className="menu-icon1">
            <div className="menu-icon1_line-top" />
            <div className="menu-icon1_line-middle" />
            <div className="menu-icon1_line-bottom" />
          </div>
        </button>
      </div>
    </header>
  )
}
