import LogoTitle from '../../assets/images/logo-m.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'd', 'i', 's', 'e', 'n', '.']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 1000)
    }, [])

    return(
        <div className="container home-page">
            <div className='text-zone'> 
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt='developer' />
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx={15}
                />
                </h1>
                <h2> Fullstack Developer</h2>
                <Link to='/contact' className='flat-button'>contact me</Link>
            </div>
        </div>
    )
}

export default Home