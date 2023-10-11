import React from 'react';

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>About</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>CUMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>it is preaty aweasome clone</p>
        <p>REfferral accepted</p>
        <p>Papa Fam</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
        <p>PaPa React</p>
        <p>Presents</p>
        <p>Another link</p>
        <p>Another link</p>
        <p>Airbnb Another link</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Another link</p>
        <p>Another link</p>
        <p>Another link Investors</p>
        <p>Airbnb Another link</p>
        <p>Airbnb Another link</p>
      </div>
    </div>
  );
}

export default Footer;
