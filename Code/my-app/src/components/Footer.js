import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Site created for educational purposes
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <p className='footer-subscription-heading'>

        </p>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              PhotoLight
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>PhotoLight © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to={{ pathname: "https://github.com/AdrianSzym96/InzynieriaOprogramowania" }}
              target='_blank'
              aria-label='github'
            >
              <i class='fab fa-github' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
