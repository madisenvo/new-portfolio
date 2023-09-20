import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import LogoM from '../../assets/images/logo-m.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <>
      <div className={`nav-bar ${menuVisible ? 'menu-open' : ''}`}>
        <Link className="logo" to="/">
          <img src={LogoM} alt="logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="madisen" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/madisen-vogel/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/madisenvo"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
      <button
        className={`menu-toggle ${menuVisible ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        {menuVisible ? (
          <FontAwesomeIcon icon={faTimes} color="#fff" /> // Use faTimes for the "X" icon
        ) : (
          <FontAwesomeIcon icon={faBars} color="#fff" /> // Use faBars for the default hamburger icon
        )}
      </button>
    </>
  )
}

export default Sidebar
