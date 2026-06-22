import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-[#111827]/75 backdrop-blur-xl px-6 py-4 border-b border-gray-800/60 transition-all duration-300'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        
        {/* Logo */}
        <div className='text-white text-2xl font-black cursor-pointer tracking-wider hover:opacity-90 transition-opacity duration-300 select-none'>
          ASHEN<span className='text-cyan-400'>.</span>
        </div>
        
        {/* Desktop Navigation Links */}
        <nav className='hidden md:flex items-center space-x-8'>
          {menuItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href} 
              className='text-gray-400 hover:text-white transition duration-300 font-medium text-sm tracking-wide relative py-1 group'
            >
              {item.name}
              
              <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full'></span>
            </a>
          ))}
        </nav>

        {/* Contact Me Button (Desktop) */}
        <a 
          href="#contact" 
          className='hidden md:block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-md shadow-cyan-500/10 text-center tracking-wide'
        >
          Contact Me
        </a>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='block md:hidden text-gray-400 hover:text-white focus:outline-none transition-colors duration-300'
          aria-label='Toggle Menu'
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            {isMenuOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#111827]/95 backdrop-blur-2xl border-b border-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <nav className='flex flex-col p-6 space-y-4'>
          {menuItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href} 
              onClick={() => setIsMenuOpen(false)}
              className='text-gray-300 hover:text-cyan-400 transition duration-300 font-medium text-lg'
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-3 rounded-xl font-bold text-base text-center shadow-lg shadow-cyan-500/10 block'
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;