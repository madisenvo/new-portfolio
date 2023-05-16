import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-m.png'
import Me from '../../assets/images/MyFace.png'
import './index.scss'

const Home = () => {
  const nameArray = ['a', 'd', 'i', 's', 'e', 'n', '.']
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div className="container">
        <div className="home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img src={LogoTitle} alt="developer" />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
            </h1>
            <h2> Fullstack Developer</h2>
            <Link to="/contact" className="flat-button">
              contact me
            </Link>
          </div>
        </div>

        <div className="selfie">
          <img src={Me} alt="my face" />
        </div>
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default Home
