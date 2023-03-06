import React from 'react'
import { Link } from 'gatsby'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './header.module.css'

const Header = (props) => {
  return (
    <div className={` ${styles['header']} ${styles[props.rootClassName]} `}>
      <header data-thq="thq-navbar" className={styles['navbar-interactive']}>
        <Link to="/" className={styles['navlink']}>
          <img
            alt={props.Logo_alt}
            src={props.LogoSrcURL}
            loading="lazy"
            data-aos="fade-left"
            className={styles['logo']}
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className={styles['desktop-menu']}
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className={styles['nav']}
          >
            <a href={props.LinkURL1} data-aos="fade" className={styles['link']}>
              {props.LinkText1}
            </a>
            <a
              href={props.LinkURL2}
              data-aos="fade"
              className={styles['link01']}
            >
              {props.LinkText2}
            </a>
            <a
              href={props.LinkURL3}
              data-aos="fade"
              className={styles['link02']}
            >
              {props.LinkText3}
            </a>
            <a
              href={props.LinkURL4}
              data-aos="fade"
              className={styles['link03']}
            >
              {props.LinkText4}
            </a>
            <a
              href={props.LinkURL5}
              data-aos="fade"
              className={styles['link04']}
            >
              {props.LinkText5}
            </a>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className={styles['btn-group']}>
          <a
            href={props.LinkButton3}
            data-aos="fade"
            className={` ${styles['login']} ${projectStyles['button']} `}
          >
            {props.LinkButton1}
          </a>
          <a
            href={props.LinkButton2}
            data-aos="fade"
            className={` ${styles['register']} ${projectStyles['button']} `}
          >
            {props.Register}
          </a>
        </div>
        <div data-thq="thq-burger-menu" className={styles['burger-menu']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className={styles['mobile-menu']}>
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className={styles['nav1']}
          >
            <div className={styles['container']}>
              <Link to="/" className={styles['navlink1']}>
                <img
                  alt={props.MLogoAlt}
                  src={props.image_src}
                  className={styles['image']}
                />
              </Link>
              <div data-thq="thq-close-menu" className={styles['menu-close']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className={styles['nav2']}
            >
              <a href={props.MLinkURL1} className={styles['link05']}>
                {props.MLinkText1}
              </a>
              <a href={props.MLinkURL2} className={styles['link06']}>
                {props.MLinkText2}
              </a>
              <a href={props.MLinkURL3} className={styles['link07']}>
                {props.MLinkText3}
              </a>
              <a href={props.MLinkURL4} className={styles['link08']}>
                {props.MLinkText4}
              </a>
              <a href={props.MLinkURL5} className={styles['link09']}>
                {props.MLinkText5}
              </a>
            </nav>
            <div className={styles['container1']}>
              <a
                href={props.MButtonLink1}
                className={` ${styles['login1']} ${projectStyles['button']} `}
              >
                {props.MButtonText1}
              </a>
              <a
                href={props.MButtonLink2}
                className={` ${styles['register1']} ${projectStyles['button']} `}
              >
                {props.MButtonText2}
              </a>
            </div>
          </div>
          <div className={styles['icon-group']}>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={styles['icon04']}
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon06']}
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className={styles['icon08']}
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

Header.defaultProps = {
  MLinkURL3: '',
  LinkURL3: '',
  MLinkURL4: '',
  MLinkText3: 'Restaurant',
  rootClassName: '',
  LinkText3: 'Restaurant',
  LinkText1: 'About',
  MButtonLink2: '',
  MButtonText1: 'Order',
  MButtonText2: 'Contact',
  LinkButton3: '',
  LinkButton2: '',
  LinkText4: 'Club',
  LogoSrcURL: '/playground_assets/mayalogo-1500h.png',
  MLinkText1: 'About',
  LinkText5: 'Stuff',
  LinkButton1: 'Contact',
  LinkURL4: '',
  MButtonLink1: '',
  LinkURL5: '',
  image_src: '/playground_assets/mayalogo-1500h.png',
  MLinkText5: 'Stuff',
  MLinkURL5: '',
  MLinkURL2: '',
  LinkURL1: '',
  Register: 'Order',
  Logo_alt: 'logo',
  MLinkText4: 'Club',
  LinkText2: 'Resort',
  MLinkText2: 'Resort',
  MLogoAlt: 'image',
  LinkURL2: '',
  MLinkURL1: '',
}

Header.propTypes = {
  MLinkURL3: PropTypes.string,
  LinkURL3: PropTypes.string,
  MLinkURL4: PropTypes.string,
  MLinkText3: PropTypes.string,
  rootClassName: PropTypes.string,
  LinkText3: PropTypes.string,
  LinkText1: PropTypes.string,
  MButtonLink2: PropTypes.string,
  MButtonText1: PropTypes.string,
  MButtonText2: PropTypes.string,
  LinkButton3: PropTypes.string,
  LinkButton2: PropTypes.string,
  LinkText4: PropTypes.string,
  LogoSrcURL: PropTypes.string,
  MLinkText1: PropTypes.string,
  LinkText5: PropTypes.string,
  LinkButton1: PropTypes.string,
  LinkURL4: PropTypes.string,
  MButtonLink1: PropTypes.string,
  LinkURL5: PropTypes.string,
  image_src: PropTypes.string,
  MLinkText5: PropTypes.string,
  MLinkURL5: PropTypes.string,
  MLinkURL2: PropTypes.string,
  LinkURL1: PropTypes.string,
  Register: PropTypes.string,
  Logo_alt: PropTypes.string,
  MLinkText4: PropTypes.string,
  LinkText2: PropTypes.string,
  MLinkText2: PropTypes.string,
  MLogoAlt: PropTypes.string,
  LinkURL2: PropTypes.string,
  MLinkURL1: PropTypes.string,
}

export default Header
