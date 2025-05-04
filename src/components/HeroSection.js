/**
 * HeroSection.js
 * -------------------------------------------
 * 🔧 Changes made by Jack — 2025-05-04 18:41 BST
 *
 * ✅ Fixed: Moved inline `console.log` to a proper event handler.
 * ✅ Improved: Added comments for readability and structure.
 * ✅ Organized: Video settings and button layout for clarity.
 * ✅ Ensured: React best practices for event handling and semantic HTML.
 */

import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  // Event handler for the "Watch Trailer" button
  const handleWatchTrailer = () => {
    console.log('Trailer button clicked');
  };

  return (
    <div className='hero-container'>
      {/* Background video */}
      <video src='/videos/video-1.mp4' autoPlay loop muted playsInline />

      {/* Hero text */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>

      {/* Hero buttons */}
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={handleWatchTrailer}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
