import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './blog-post-card4.module.css'

const BlogPostCard4 = (props) => {
  return (
    <div
      data-aos="fade-down"
      className={` ${styles['blog-post-card']} ${
        projectStyles['gradient-box']
      } ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container']}>
        <a
          href="https://booking.mayaroyale.com"
          target="_blank"
          rel="noreferrer noopener"
          className={` ${styles['link']} ${projectStyles['button']} `}
        >
          {props.button}
        </a>
      </div>
      <div>
        <DangerousHTML
          html={`<style>
    .gradient-box {
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                  radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
    border: 3px solid transparent;
    background-repeat: no-repeat;
    background-origin: padding-box, border-box;
  }
</style>
`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

BlogPostCard4.defaultProps = {
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=1000',
  image_alt: 'image',
  button: 'View Our Suites',
}

BlogPostCard4.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  button: PropTypes.string,
}

export default BlogPostCard4
