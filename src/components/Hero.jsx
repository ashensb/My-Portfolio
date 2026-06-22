import React from 'react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id='home' className='relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 max-w-7xl mx-auto overflow-hidden'>
      
      {/* Background Decorative Glows */}
      <div className='absolute top-1/4 left-1/10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse'></div>
      <div className='absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-700'></div>

      <div className='grid md:grid-cols-2 gap-12 items-center w-full relative z-10'>
        
        {/* Left Side: Content */}
        <div data-aos='fade-right' className='flex flex-col items-center md:items-start text-center md:text-left'>
          {/* Professional Tech Badge */}
          <div className='inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full font-semibold tracking-wider text-xs uppercase mb-6 shadow-sm'>
            <span className='w-2 h-2 rounded-full bg-cyan-400 animate-ping'></span>
            Welcome to my portfolio
          </div>
          
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-4'>
            Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>Ashen</span>
          </h1>
          
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-400 mb-6 tracking-wide'>
            Software & DevOps Engineer
          </h2>
          
          <p className='text-gray-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg font-light'>
            I design and build scalable applications while automating deployment pipelines. Combining robust software development with efficient DevOps practices to deliver high-performance solutions.
          </p>
          
          {/* Button Group */}
          <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
            <a 
              href='#projects' 
              className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3.5 rounded-xl font-bold hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-cyan-500/20 text-center tracking-wide'
            >
              View Projects
            </a>
            <a 
              href="/cv.pdf" 
              download="Ashen_CV.pdf" 
              className="border border-gray-700 text-gray-300 px-8 py-3.5 rounded-xl font-bold hover:bg-gray-800/60 hover:text-white hover:border-gray-500 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 inline-block text-center tracking-wide backdrop-blur-sm"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image with Premium Frames */}
        <div className='flex justify-center items-center relative' data-aos='fade-left'>
          {/* Animated Tech Geometric Ring behind Image */}
          <div className='absolute w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full border border-cyan-500/20 animate-[spin_20s_linear_infinite] -z-10'></div>
          <div className='absolute w-76 h-76 md:w-[24rem] md:h-[24rem] rounded-full border border-dashed border-purple-500/20 animate-[spin_15s_linear_infinite_reverse] -z-10'></div>

          <div className='relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-gray-800 p-2 bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl shadow-cyan-500/10 group'>
            <div className='w-full h-full rounded-2xl overflow-hidden relative'>
              {/* Overlay tint on hover */}
              <div className='absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300 z-10'></div>
              <img 
                src={profileImg} 
                alt="Ashen Profile" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;