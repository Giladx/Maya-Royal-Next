import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './hero.module.css'

const Hero = (props) => {
  return (
    <div
      data-aos="fade"
      className={` ${styles['hero']} ${styles[props.rootClassName]} `}
    >
      <h1 data-aos="fade-down" className={styles['text']}>
        {props.Heading}
      </h1>
      <span data-aos="fade-down" className={styles['text1']}>
        So you can be yourself
      </span>
      <a
        href={props.HeroButtonLink}
        data-aos="fade-up"
        target="_blank"
        rel="noreferrer noopener"
        className={` ${styles['link']} ${projectStyles['button']} `}
      >
        {props.HeroButtonText}
      </a>
    </div>
  )
}

Hero.defaultProps = {
  HeroButtonLink: '',
  Heading: 'Mexico Kosher Resort',
  rootClassName: '',
  HeroButtonText: 'Schedule  Your Vacation',
}

Hero.propTypes = {
  HeroButtonLink: PropTypes.string,
  Heading: PropTypes.string,
  rootClassName: PropTypes.string,
  HeroButtonText: PropTypes.string,
}

export default Hero
