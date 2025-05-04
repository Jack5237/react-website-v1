/**
 * Footer.js
 * -------------------------------------------
 * 🔧 Changes made by Jack — 2025-05-04 18:32 BST
 * 
 * ✅ Fixed: Replaced all 'class' attributes with 'className' (React compatibility).
 * ✅ Improved: Added helpful comments for clarity.
 * ✅ Organized: Grouped and cleaned up JSX structure.
 * ✅ Enhanced: Made social icons more accessible and structured.
 * ✅ DRY: Prevented repetitive code where possible.
 */

import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* Newsletter Signup Section */}
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              aria-label='Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Footer Navigation Links */}
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <FooterLinks
            title='About Us'
            links={['How it works', 'Testimonials', 'Careers', 'Investors', 'Terms of Service']}
            paths={['/sign-up', '/', '/', '/', '/']}
          />
          <FooterLinks
            title='Contact Us'
            links={['Contact', 'Support', 'Destinations', 'Sponsorships']}
            paths={['/', '/', '/', '/']}
          />
        </div>
        <div className='footer-link-wrapper'>
          <FooterLinks
            title='Videos'
            links={['Submit Video', 'Ambassadors', 'Agency', 'Influencer']}
            paths={['/', '/', '/', '/']}
          />
          <FooterLinks
            title='Social Media'
            links={['Instagram', 'Facebook', 'Youtube', 'Twitter']}
            paths={['/', '/', '/', '/']}
          />
        </div>
      </div>

      {/* Social Media Section */}
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>TRVL © 2020</small>
          <div className='social-icons'>
            {[
              { platform: 'Facebook', icon: 'facebook-f' },
              { platform: 'Instagram', icon: 'instagram' },
              { platform: 'Youtube', icon: 'youtube' },
              { platform: 'Twitter', icon: 'twitter' },
              { platform: 'LinkedIn', icon: 'linkedin' },
            ].map((item, index) => (
              <Link
                key={index}
                className={`social-icon-link ${item.platform.toLowerCase()}`}
                to='/'
                target='_blank'
                aria-label={item.platform}
              >
                <i className={`fab fa-${item.icon}`} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Reusable FooterLinks component for clarity and reusability
 */
function FooterLinks({ title, links, paths }) {
  return (
    <div className='footer-link-items'>
      <h2>{title}</h2>
      {links.map((label, idx) => (
        <Link key={idx} to={paths[idx]}>
          {label}
        </Link>
      ))}
    </div>
  );
}

export default Footer;
