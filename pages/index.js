import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Hero from '../components/hero'
import FeatureCard4 from '../components/feature-card4'
import GalleryCard2 from '../components/gallery-card2'
import BlogPostCard4 from '../components/blog-post-card4'
import TestimonialCard2 from '../components/testimonial-card2'
import TestimonialCard4 from '../components/testimonial-card4'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Maya Royale</title>
          <meta name="description" content="Resort | Restaurant | Club" />
          <meta property="og:title" content="Maya Royale" />
          <meta
            property="og:description"
            content="Resort | Restaurant | Club"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c55e303e-157e-4374-8ff8-9832a027bba7/2e0d3d56-a8d9-486c-8f5c-3b9c922a25d6?org_if_sml=1"
          />
        </Head>
        <Header LinkURL4="https://mas-tul.com"></Header>
        <Hero></Hero>
        <div className="home-features">
          <h1 data-aos="fade-right" className="home-text">
            <span>Discover Maya Royale</span>
            <br></br>
          </h1>
          <div data-aos="fade-right" className="home-separator"></div>
          <div className="home-container01">
            <div className="home-container02">
              <FeatureCard4
                title="The Resort"
                rootClassName="rootClassName1"
              ></FeatureCard4>
              <FeatureCard4
                title="The Club"
                rootClassName="rootClassName4"
              ></FeatureCard4>
              <FeatureCard4
                title="The Restaurant"
                rootClassName="rootClassName3"
              ></FeatureCard4>
              <FeatureCard4
                title="Top Staff"
                rootClassName="rootClassName2"
              ></FeatureCard4>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;w=500"
              data-aos="fade-left"
              className="home-image"
            />
          </div>
        </div>
        <div className="home-gallery">
          <div className="home-container03">
            <div className="home-container04">
              <div className="home-container05">
                <GalleryCard2 rootClassName="rootClassName2"></GalleryCard2>
              </div>
              <div className="home-container06">
                <GalleryCard2
                  image_src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGZvb2R8ZW58MHx8fHwxNjI2NDQ5NjUy&amp;ixlib=rb-1.2.1&amp;h=1000"
                  rootClassName="rootClassName3"
                ></GalleryCard2>
              </div>
            </div>
            <div className="home-container07">
              <GalleryCard2
                image_src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="rootClassName"
              ></GalleryCard2>
            </div>
          </div>
          <div className="home-container08">
            <GalleryCard2
              image_src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName4"
            ></GalleryCard2>
          </div>
        </div>
        <div className="home-blog">
          <BlogPostCard4
            label="Travel"
            rootClassName="rootClassName1"
          ></BlogPostCard4>
          <div className="home-container09">
            <BlogPostCard4
              label="Club Party"
              image_src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHRyYXZlbHxlbnwwfHx8fDE2MjY0MzI2Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName2"
            ></BlogPostCard4>
            <BlogPostCard4
              image_src="https://images.unsplash.com/photo-1446822775955-c34f483b410b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHx0cmF2ZWwlMjBmb29kfGVufDB8fHx8MTYyNjQ1Mjg0Ng&amp;ixlib=rb-1.2.1&amp;w=1000"
              rootClassName="rootClassName3"
            ></BlogPostCard4>
          </div>
          <BlogPostCard4
            date="JULY 10"
            image_src="https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJvYXR8ZW58MHx8fHwxNjI2NDUyODIx&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName4"
          ></BlogPostCard4>
        </div>
        <div className="home-testimonial">
          <div className="home-container10">
            <div className="home-container11">
              <div className="home-container12">
                <TestimonialCard2
                  profile_src="https://images.unsplash.com/photo-1614630982169-e89202c5e045?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUyMTk4&amp;ixlib=rb-1.2.1&amp;h=1200"
                  rootClassName="rootClassName1"
                ></TestimonialCard2>
              </div>
              <TestimonialCard2
                profile_src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvcnRyYWl0JTIwYnd8ZW58MHx8fHwxNjI2NDUyMjQw&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName2"
              ></TestimonialCard2>
            </div>
            <div className="home-container13">
              <TestimonialCard4
                picture_src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
                profile_src="https://images.unsplash.com/photo-1553184118-d20774c4c1db?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMGJ3fGVufDB8fHx8MTYyNjQ1MjI0MA&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName"
              ></TestimonialCard4>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .home-text {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-separator {
            width: 100px;
            height: 2px;
            background-color: var(--dl-color-gray-500);
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container02 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .home-image {
            width: 450px;
            height: 450px;
            box-shadow: 5px 5px 20px 0px #8a8a8a;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
            object-position: left;
          }
          .home-gallery {
            width: 100%;
            height: 1000px;
            display: flex;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-container03 {
            flex: 3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container04 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-container05 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container06 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container07 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container08 {
            flex: 2;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .home-container09 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-testimonial {
            width: 100%;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/2_16%20-%20foto-1500w.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed;
          }
          .home-container10 {
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: stretch;
            justify-content: space-between;
          }
          .home-container11 {
            flex: 2;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container12 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container13 {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .home-features {
              align-items: center;
            }
            .home-container01 {
              flex-direction: column;
            }
            .home-image {
              width: 300px;
              height: 300px;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
            .home-container08 {
              width: 100%;
            }
            .home-container10 {
              flex-direction: column;
            }
            .home-container11 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text {
              text-align: center;
            }
            .home-container01 {
              flex-direction: column;
            }
            .home-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container04 {
              flex-direction: column;
            }
            .home-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-container09 {
              flex: 0 0 auto;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-container10 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container02 {
              grid-template-columns: 1fr;
            }
            .home-image {
              width: 250px;
              height: 250px;
            }
            .home-gallery {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-container03 {
              width: auto;
            }
            .home-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container10 {
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

export default Home
