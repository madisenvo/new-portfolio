import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const form = useRef()
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_96c9nyr',
        'template_1nibsrq',
        e.target,
        'EU7DwKRXEuBDZw-sE'
      )
      .then(
        (result) => {
          alert('email sent successfully')
        },
        (error) => {
          alert('error sending email')
        }
      )
    e.target.reset()
  }

  return (
    <>
      <div className="container contact-page">
        <div className="contact-content">
          <h1 className="contact-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      <Loader type="ball-rotate" />
      </div>
    </>
  )
}

export default Contact
