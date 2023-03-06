import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './about.module.css'

const About = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>About - Maya Royale</title>
        <meta name="description" content="Resort | Restaurant | Club" />
        <meta property="og:title" content="About - Maya Royale" />
        <meta property="og:description" content="Resort | Restaurant | Club" />
      </Helmet>
      <Header
        LinkURL1="/about"
        LinkURL2="https://mayaroyale.com"
        LinkURL4="https://mas-tul.com"
        MLinkURL2="https://mayaroyale.com"
        MLinkURL4="https://mas-tul.com"
        rootClassName="root-class-name"
      ></Header>
      <div className={styles['hero']}>
        <div className={styles['container1']}>
          <h1 className={styles['text']}>Where are we?</h1>
          <span className={styles['text01']}>
            <span>Sabancuy, Campeche, Yucatan Peninsula Mexico</span>
            <br></br>
            <span>900 Years of untouched beaches</span>
            <br></br>
            <span>
              90 degrees water year round
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Seaweed free
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Hurricane free
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Enjoy sunset while dining </span>
            <br></br>
            <span>
              Safest state in Mexico Pueblos Mágicos Status ( Magic City )
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <button
            className={` ${styles['button']} ${projectStyles['button']} `}
          >
            Schedule Your Vacation
          </button>
        </div>
        <img
          alt="image"
          src="/playground_assets/map-1500w.webp"
          data-aos="fade"
          className={styles['image']}
        />
      </div>
      <Footer rootClassName="root-class-name"></Footer>
    </div>
  )
}

export default About
