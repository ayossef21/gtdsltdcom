// components/ComingSoon.js
import React from 'react';
import Image from 'next/image';

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">

        <p className="mt-4 text-3xl text-gray-400">Global Technology Digital Services, LTD</p>
        <div className='mt-20'></div>
        {/* <h1 className="text-4xl font-bold text-gray-700">Coming Soon</h1> */}
        <Image src="/logos/logo.png" alt="Super Digital Company Logo" width={500} height={150} className="mb-4" />
        <div className='mt-80'></div>
        <h3>
            contact us: <a href='mailto:info@gtdsltd.com'>info@gtdsltd.com</a>
        </h3>
      </div>
    </div>
  );
};

export default ComingSoon;
