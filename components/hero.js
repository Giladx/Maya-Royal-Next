import React from 'react'

import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <div data-aos="fade" className="hero-hero">
        <h1 data-aos="fade-down" className="hero-text">
          {props.Heading}
        </h1>
        <span data-aos="fade-down" className="hero-text1">
          So you can be yourself
        </span>
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
            width: 676px;
            font-size: 5rem;
            max-width: 550px;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .hero-text1 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            margin-bottom: var(--dl-space-space-twounits);
            letter-spacing: 2px;
            text-transform: uppercase;
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
            .hero-text {
              max-width: 100%;
            }
            .hero-text1 {
              color: var(--dl-color-gray-white);
              font-size: 1.5rem;
              margin-bottom: var(--dl-space-space-threeunits);
              letter-spacing: 2px;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  HeroButtonLink: '',
  Heading: 'Mexico Kosher Resort',
  HeroButtonText: 'Schedule  Your Vacation',
}

Hero.propTypes = {
  HeroButtonLink: PropTypes.string,
  Heading: PropTypes.string,
  HeroButtonText: PropTypes.string,
}

export default Hero
