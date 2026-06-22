import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#0b0f17] border-t border-gray-900 py-12 px-6 text-center text-gray-400'>
      <div className='max-w-7xl mx-auto flex flex-col items-center gap-6'>
        
        {/* Footer Navigation Links */}
        <nav className='flex flex-wrap justify-center gap-6 md:gap-8 text-white font-medium text-base'>
          <a href='#home' className='hover:text-cyan-400 transition duration-300'>Home</a>
          <a href='#about' className='hover:text-cyan-400 transition duration-300'>About</a>
          <a href='#projects' className='hover:text-cyan-400 transition duration-300'>Portfolio</a>
          <a href='#contact' className='hover:text-cyan-400 transition duration-300'>Contact</a>
        </nav>

        {/* Contact Information */}
        <div className='flex flex-col gap-2 mt-2 text-sm md:text-base font-light tracking-wide'>
          <p>
            <span className='font-semibold text-gray-300'>Email:</span> ashenn@sandeepa@gmail.com
          </p>
          <p>
            <span className='font-semibold text-gray-300'>Phone:</span> +94 74 0950 167
          </p>
        </div>

        {/* Copyright Text */}
        <div className='text-xs md:text-sm text-gray-600 mt-4 border-t border-gray-900/50 pt-6 w-full max-w-md'>
          © 2026 Ashen. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;