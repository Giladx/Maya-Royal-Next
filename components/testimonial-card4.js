import React from 'react'

import PropTypes from 'prop-types'

const TestimonialCard4 = (props) => {
  return (
    <>
      <div
        data-aos="fade"
        className={`testimonial-card4-testimonial-card ${props.rootClassName} `}
      >
        <svg viewBox="0 0 1024 1024" className="testimonial-card4-icon">
          <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
        </svg>
        <span className="testimonial-card4-text">{props.quote}</span>
        <div className="testimonial-card4-profile">
          <img
            alt={props.picture_alt}
            src={props.picture_src}
            className="testimonial-card4-image"
          />
          <div className="testimonial-card4-container">
            <span className="testimonial-card4-text1">{props.name}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-card4-testimonial-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: stretch;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: stretch;
            border-radius: 10px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .testimonial-card4-icon {
            width: var(--dl-size-size-medium);
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .testimonial-card4-text {
            color: var(--dl-color-gray-black);
            font-size: 1.15rem;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .testimonial-card4-profile {
            width: 100%;
            display: flex;
            margin-top: auto;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: flex-start;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .testimonial-card4-image {
            width: var(--dl-size-size-medium);
            filter: grayscale();
            height: var(--dl-size-size-medium);
            display: none;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-card4-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card4-text1 {
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: 0.25rem;
          }

          @media (max-width: 991px) {
            .testimonial-card4-testimonial-card {
              align-self: auto;
            }
            .testimonial-card4-icon {
              width: var(--dl-size-size-small);
              height: auto;
            }
            .testimonial-card4-text {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .testimonial-card4-profile {
              align-self: center;
              text-align: center;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .testimonial-card4-image {
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .testimonial-card4-root-class-name {
              max-width: 100%;
            }
          }
          @media (max-width: 479px) {
            .testimonial-card4-testimonial-card {
              max-width: 100%;
              align-self: auto;
              align-items: center;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              justify-content: center;
            }
            .testimonial-card4-icon {
              width: 45px;
              height: auto;
              align-self: center;
            }
            .testimonial-card4-profile {
              justify-content: center;
            }
            .testimonial-card4-root-class-name {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard4.defaultProps = {
  picture_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
  picture_alt: 'John Doe',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo nec. Integer egestas, quam eu convallis ultrices, est nisl rutrum tellus, sed posuere velit nisi sit amet ante. In a augue porttitor, porta sapien sed, faucibus felis.',
  rootClassName: '',
  name: 'John Doe',
}

TestimonialCard4.propTypes = {
  picture_src: PropTypes.string,
  picture_alt: PropTypes.string,
  quote: PropTypes.string,
  rootClassName: PropTypes.string,
  name: PropTypes.string,
}

export default TestimonialCard4
