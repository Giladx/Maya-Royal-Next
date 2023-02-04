import React from 'react'

import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <div data-aos="fade" className="hero-hero">
        <span data-aos="fade-down" className="hero-text">
          <span className="hero-text1">Lorem ipsum dolor sit amet</span>
        </span>
        <h1 data-aos="fade-down" className="hero-text2">
          {props.Heading}
        </h1>
        <a
          href={props.HeroButtonLink}
          data-aos="fade-up"
          target="_blank"
          rel="noreferrer noopener"
          className="hero-link button"
        >
          {props.HeroButtonText}
        </a>
      </div>
      <style jsx>
        {`
          .hero-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/pastedgraphic-3-1500w.png');
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed;
          }
          .hero-text {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            letter-spacing: 2px;
          }
          .hero-text1 {
            text-transform: uppercase;
          }
          .hero-text2 {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
            max-width: 450px;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .hero-link {
            color: var(--dl-color-gray-white);
            font-size: 35px;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: #a17208;
          }
          .hero-link:hover {
            transform: scale(1.02);
          }
          @media (max-width: 1200px) {
            .hero-link {
              color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 767px) {
            .hero-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .hero-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  HeroButtonLink: '',
  Heading: 'Magnificent things are very simple',
  HeroButtonText: 'Order Now',
}

Hero.propTypes = {
  HeroButtonLink: PropTypes.string,
  Heading: PropTypes.string,
  HeroButtonText: PropTypes.string,
}

export default Hero