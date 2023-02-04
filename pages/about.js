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
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c55e303e-157e-4374-8ff8-9832a027bba7/2e0d3d56-a8d9-486c-8f5c-3b9c922a25d6?org_if_sml=1"
          />
        </Head>
        <Header
          rootClassName="header-root-class-name"
          LinkURL1="/about"
        ></Header>
        <div className="about-hero">
          <div className="about-container1">
            <h1 className="about-text">Let&apos;s keep things organised</h1>
            <span className="about-text1">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis.
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
              <span>
                <span>
                  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                  tortor.
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
            </span>
            <button className="about-button button">Get Started</button>
          </div>
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
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .about-text {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
            max-width: 25rem;
          }
          .about-text1 {
            color: var(--dl-color-gray-white);
            font-size: 1.15rem;
            max-width: 60%;
            margin-top: var(--dl-space-space-threeunits);
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
          @media (max-width: 767px) {
            .about-hero {
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-text {
              text-align: center;
            }
            .about-text1 {
              max-width: 100%;
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .about-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-button {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default About
