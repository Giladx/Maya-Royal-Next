import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Hero from '../components/hero'
import GalleryCard2 from '../components/gallery-card2'
import BlogPostCard4 from '../components/blog-post-card4'
import TestimonialCard2 from '../components/testimonial-card2'
import TestimonialCard4 from '../components/testimonial-card4'
import Footer from '../components/footer'
import styles from './index.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Maya Royale</title>
        <meta name="description" content="Resort | Restaurant | Club" />
        <meta property="og:title" content="Maya Royale" />
        <meta property="og:description" content="Resort | Restaurant | Club" />
      </Helmet>
      <Header
        LinkURL1="/about"
        LinkURL2="https://mayaroyale.com"
        LinkURL4="https://mas-tul.com"
        MLinkURL1="/about"
        MLinkURL2="https://mayaroyale.com"
        MLinkURL4="https://mas-tul.com"
        LinkButton2="https://booking.mayaroyale.com"
        MButtonLink1="https://booking.mayaroyale.com"
      ></Header>
      <Hero
        rootClassName="root-class-name"
        HeroButtonLink="https://booking.mayaroyale.com/"
      ></Hero>
      <div className={styles['features']}>
        <h1 data-aos="fade-right" className={styles['text']}>
          <span>
            Discover
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>MayaRoyale</span>
          <br></br>
        </h1>
        <div data-aos="fade-right" className={styles['separator']}></div>
        <div className={styles['container01']}>
          <div className={styles['container02']}>
            <div data-aos="fade-right" className={styles['feature-card']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <h2 className={styles['text04']}>The Resort</h2>
              <span className={styles['text05']}>
                <span>
                  Mexico Kosher Resort
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  On site Synagogue
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Endless Private Beaches
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Spa, Gym, Salons
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Nightly Entertainment
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Kabalat Shabbat </span>
                <br></br>
                <span>Candle Lighting</span>
              </span>
            </div>
            <div data-aos="fade-right" className={styles['feature-card1']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <h2 className={styles['text19']}>The Feeling</h2>
              <span className={styles['text20']}>
                <span>
                  Come to a destination unlike anything you have experienced.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Miles of Untouched beaches &amp; nature that leaves you
                  breathless.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  MayaRoyale offers you the comfort and lifestyle that is
                  important to you.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Every room is hand crafted by local Mayans. Nightly
                  entertainment and 3 restaurants that will fulfill your
                  desires.
                </span>
              </span>
            </div>
            <div data-aos="fade-right" className={styles['feature-card2']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon4']}>
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <h2 className={styles['text28']}>The Restaurant</h2>
              <span className={styles['text29']}>
                <span>
                  Glatt Kosher Restaurants
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Certified by MexKosher
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Meats Dairy Fish
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Breakfast Lunch Dinner
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>24/7 Room Service</span>
              </span>
            </div>
            <div data-aos="fade-right" className={styles['feature-card3']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon6']}>
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <h2 className={styles['text39']}>Top Staff</h2>
              <span className={styles['text40']}>
                <span>
                  Unparalleled Service
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Enjoy 5 star experiences </span>
                <br></br>
                <span>Genuine Knowledgeable </span>
                <br></br>
                <span>
                  Friendly &amp; Experienced
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Anticipatory</span>
              </span>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/maarten-van-den-heuvel-siuwr3ucir0-unsplash-500w.jpg"
            data-aos="fade"
            className={styles['image']}
          />
        </div>
      </div>
      <div className={styles['gallery']}>
        <div className={styles['container03']}>
          <div className={styles['container04']}>
            <div className={styles['container05']}>
              <GalleryCard2
                image_src="/playground_assets/1-1500h.webp"
                rootClassName="rootClassName2"
              ></GalleryCard2>
            </div>
            <div className={styles['container06']}>
              <GalleryCard2
                image_src="/playground_assets/suite-1500w.webp"
                rootClassName="rootClassName3"
              ></GalleryCard2>
            </div>
          </div>
          <div className={styles['container07']}>
            <GalleryCard2
              image_src="/playground_assets/10_19%20-%20foto1-1500h.jpg"
              rootClassName="rootClassName"
            ></GalleryCard2>
          </div>
        </div>
        <div className={styles['container08']}>
          <GalleryCard2
            image_src="/playground_assets/12-1500h.webp"
            rootClassName="rootClassName4"
          ></GalleryCard2>
        </div>
      </div>
      <div className={styles['blog']}>
        <BlogPostCard4
          label="Travel"
          image_src="/playground_assets/10-1500w.webp"
          rootClassName="rootClassName1"
        ></BlogPostCard4>
        <div className={styles['container09']}>
          <BlogPostCard4
            label="Club Party"
            button="View Our Restaurants"
            image_src="/playground_assets/30-1500w.webp"
            rootClassName="rootClassName2"
          ></BlogPostCard4>
          <BlogPostCard4
            button="View Our Resort"
            image_src="/playground_assets/23-1500w.webp"
            rootClassName="rootClassName3"
          ></BlogPostCard4>
        </div>
        <BlogPostCard4
          date="JULY 10"
          button="Tour Our Bars"
          image_src="/playground_assets/42-1500w.webp"
          rootClassName="rootClassName4"
        ></BlogPostCard4>
      </div>
      <div className={styles['testimonial']}>
        <div className={styles['container10']}>
          <div className={styles['container11']}>
            <div className={styles['container12']}>
              <TestimonialCard2
                name="Joe A."
                quote="It is an incredible place outside of technology but you still have the accessibility to the phone another concept and the beautiful view of the beach of 10 and the attention and cleanliness 10 with a rustic and pleasant style it is worth visiting very accessible I recommend Easter where the waters are most crystal clear and relaxed magnificent concept."
                picture_src="Joe  A."
                profile_src="https://images.unsplash.com/photo-1614630982169-e89202c5e045?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUyMTk4&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName1"
              ></TestimonialCard2>
            </div>
            <TestimonialCard2
              name="Debora H."
              quote="The place is very nice and with a family atmosphere. Very good location, prices vary depending on the area you want to be in. Its attractions are the rest areas as well as the hammocks on the beach and the swing. We rented a small sail boat on the calmocean. We did the tour with dolphins and over 150 birds to see. A very special place."
              picture_src="Sarah D."
              profile_src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvcnRyYWl0JTIwYnd8ZW58MHx8fHwxNjI2NDUyMjQw&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
            ></TestimonialCard2>
          </div>
          <div className={styles['container13']}>
            <TestimonialCard4
              name="Sarah D."
              quote="I visited Sabancuy many years ago and just recently, the beaches there are absolutely wonderful, never seaweed, or dirt. You can walk into the water 100’ deep and it will reach your chest. The nature is amazing, the beautiful surrounding. Simply amazing"
              picture_src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
              profile_src="https://images.unsplash.com/photo-1553184118-d20774c4c1db?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMGJ3fGVufDB8fHx8MTYyNjQ1MjI0MA&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></TestimonialCard4>
          </div>
        </div>
      </div>
      <Footer rootClassName="root-class-name1"></Footer>
    </div>
  )
}

export default Home
