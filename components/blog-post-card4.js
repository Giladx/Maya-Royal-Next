import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const BlogPostCard4 = (props) => {
  return (
    <>
      <div
        className={`blog-post-card4-blog-post-card gradient-box ${props.rootClassName} `}
      >
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="blog-post-card4-image"
        />
        <div className="blog-post-card4-container">
          <span className="blog-post-card4-text">{props.date}</span>
          <span className="blog-post-card4-text1">{props.description}</span>
          <div className="blog-post-card4-separator"></div>
          <span className="blog-post-card4-text2">{props.label}</span>
        </div>
        <div>
          <DangerousHTML
            html={`<style>
    .gradient-box {
    box-sizing: border-box;
    margin: .2rem auto .2rem;
    padding: .2rem;
    width: 80%;
    max-width: 25rem;
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
      <style jsx>
        {`
          .blog-post-card4-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            border-radius: 10px;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-post-card4-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card4-image {
            width: 100%;
            height: 100%;
            max-height: 50rem;
            object-fit: cover;
            border-radius: 10px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .blog-post-card4-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            border-radius: 10px;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          .blog-post-card4-text {
            color: var(--dl-color-gray-500);
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-post-card4-text1 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 300;
          }
          .blog-post-card4-separator {
            width: 40%;
            height: 1px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-900);
          }
          .blog-post-card4-text2 {
            color: var(--dl-color-gray-700);
            font-weight: 700;
          }
          .blog-post-card4-root-class-name {
            margin-bottom: 64px;
          }

          .blog-post-card4-root-class-name2 {
            margin-bottom: 48px;
          }
        `}
      </style>
    </>
  )
}

BlogPostCard4.defaultProps = {
  description:
    'Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  date: 'JULY 24',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=1000',
  image_alt: 'image',
  label: 'Food & Drink',
}

BlogPostCard4.propTypes = {
  description: PropTypes.string,
  date: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  label: PropTypes.string,
}

export default BlogPostCard4
