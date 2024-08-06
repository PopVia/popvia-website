import React from 'react';
import CustomSlider from './customSlider';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            <div className='hero__wrapper'>
                <h1>PopVia</h1>
                <CustomSlider />
                <h2 className='biryani'>Welcome to PopVia, where we make the Chrome Extensions you didn’t know you needed! We prioritize a user’s online experience and their convenience. We hope you find a way to make your life easier here.</h2>
            </div>
        </div>
    </div>
  )
}

export default Hero;
