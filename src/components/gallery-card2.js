import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './gallery-card2.module.css'

const GalleryCard2 = (props) => {
  return (
    <div
      data-aos="fade"
      className={` ${styles['gallery-card']} ${projectStyles['gradient-box']} ${
        styles[props.rootClassName]
      } `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container']}>
        <div className={styles['container1']}>
          <h2 className={styles['text']}>{props.title}</h2>
          <span className={styles['text1']}>{props.description}</span>
          <span className={styles['text2']}>SHOW MORE</span>
        </div>
      </div>
    </div>
  )
}

GalleryCard2.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&w=1500',
  rootClassName: '',
  image_alt: 'image',
  title: 'Project Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
}

GalleryCard2.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default GalleryCard2
