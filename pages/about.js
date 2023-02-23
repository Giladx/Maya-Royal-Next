import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Maya Royale</title>
          <meta name="description" content="Resort | Restaurant | Club" />
          <meta property="og:title" content="About - Maya Royale" />
          <meta
            property="og:description"
            content="Resort | Restaurant | Club"
          />
        </Head>
        <Header
          LinkURL1="/about"
          LinkURL2="https://mayaroyale.com"
          LinkURL4="https://mas-tul.com"
          MLinkURL2="https://mayaroyale.com"
          MLinkURL4="https://mas-tul.com"
          rootClassName="header-root-class-name"
        ></Header>
        <div className="about-hero">
          <div className="about-container1">
            <h1 className="about-text">Where are we?</h1>
            <span className="about-text01">
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
            <button className="about-button button">
              Schedule Your Vacation
            </button>
          </div>
          <img
            alt="image"
            src="/playground_assets/map-1500w.webp"
            data-aos="fade"
            className="about-image"
          />
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-color: #d9d9d9;
            background-image: url('/playground_assets/pastedgraphic-3-1500h.png');
            background-repeat: no-repeat;
            background-position: bottom;
            background-attachment: fixed;
          }
          .about-container1 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.33);
          }
          .about-text {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
            max-width: 25rem;
          }
          .about-text01 {
            color: var(--dl-color-gray-white);
            font-size: 2rem;
            max-width: 60%;
            margin-top: var(--dl-space-space-threeunits);
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .about-button {
            color: var(--dl-color-gray-white);
            font-style: normal;
            text-align: center;
            transition: 0.3s;
            font-weight: 400;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .about-button:hover {
            transform: scale(1.02);
          }
          .about-image {
            width: 50%;
            height: auto;
            box-shadow: 5px 5px 10px 0px #7e7979;
            object-fit: cover;
            border-radius: 10px;
          }
          @media (max-width: 1600px) {
            .about-image {
              width: 61%;
            }
          }
          @media (max-width: 1200px) {
            .about-image {
              width: 83%;
            }
          }
          @media (max-width: 991px) {
            .about-container1 {
              align-items: center;
            }
            .about-image {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .about-hero {
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-text {
              text-align: center;
            }
            .about-text01 {
              max-width: 100%;
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .about-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .about-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-text01 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-button {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default About
