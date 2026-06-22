import React from 'react';

const About = () => {
  return (
    <section id='about' className='relative py-28 px-6 max-w-5xl mx-auto flex flex-col items-center justify-center min-h-screen overflow-hidden'>
      
      {/* Background Subtle Spotlight */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -z-10 pointer-events-none'></div>

      {/* Title Section */}
      <div className='text-center mb-16' data-aos='fade-up'>
        <h4 className='text-cyan-400 font-bold tracking-widest text-xs uppercase mb-2'>Get To Know Me</h4>
        <h2 className='text-4xl md:text-5xl font-black text-white tracking-wide relative inline-block mb-4'>
          About Me
        </h2>
        <div className='h-[3px] w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-md shadow-cyan-400/20'></div>
      </div>

      {/* Description */}
      <div className='text-center max-w-3xl mb-16' data-aos='fade-up' data-aos-delay='100'>
        <p className='text-gray-400 text-lg md:text-xl leading-relaxed font-light tracking-wide'>
          Hi! I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold'>Ashen</span>, Software Engineering undergraduate proficient in building full-stack MERN applications and automating software workflows. Demonstrated hands-on experience in Docker containerization, AWS cloud deployment, and configuring automated CI/CD pipelines. Seeking an  opportunity to apply these development and operational skills to innovative real-world projects.
        </p>
      </div>

      {/* Education & Experience Main Container */}
      <div 
        className='w-full bg-gradient-to-b from-gray-900/60 to-gray-950/60 border border-gray-800/80 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl relative group'
        data-aos='fade-up'
        data-aos-delay='200'
      >
        {/* Decorative corner accent */}
        <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent blur-xl rounded-tr-3xl pointer-events-none'></div>

        <div className='flex flex-col md:flex-row items-start gap-6 md:gap-8'>
          
          {/* Professional Icon/Badge */}
          <div className='flex-shrink-0 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 p-4 rounded-2xl text-3xl shadow-xl flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/30 transition-colors duration-500'>
            🎓
          </div>

          {/* Content Section */}
          <div className='flex-grow w-full'>
            <h3 className='text-2xl font-bold text-white mb-8 tracking-wide flex items-center gap-2'>
              Education & <span className='text-cyan-400'>Experience</span>
            </h3>
            
            {/* Timeline/List Items */}
            <div className='space-y-6'>
              
              {/* Item 1 */}
              <div className='group/item flex gap-4 p-4 rounded-2xl hover:bg-gray-900/40 border border-transparent hover:border-gray-800/60 transition-all duration-300'>
                <div className='flex flex-col items-center pt-1.5'>
                  <div className='w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20 group-hover/item:scale-125 transition-transform duration-300'></div>
                </div>
                <p className='text-gray-400 group-hover/item:text-gray-300 text-sm md:text-base font-light leading-relaxed transition-colors duration-300'>
                  Pursuing Software Engineering Degree: Currently reading for a Bachelor's degree in Software Engineering, focusing on advanced computing, algorithms, and software architecture.
                </p>
              </div>

              {/* Item 2 */}
              <div className='group/item flex gap-4 p-4 rounded-2xl hover:bg-gray-900/40 border border-transparent hover:border-gray-800/60 transition-all duration-300'>
                <div className='flex flex-col items-center pt-1.5'>
                  <div className='w-2.5 h-2.5 rounded-full bg-blue-400 ring-4 ring-blue-400/20 group-hover/item:scale-125 transition-transform duration-300'></div>
                </div>
                <p className='text-gray-400 group-hover/item:text-gray-300 text-sm md:text-base font-light leading-relaxed transition-colors duration-300'>
                  Full-Stack Development (MERN): Hands-on experience in building scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and designing efficient RESTful APIs.
                </p>
              </div>

              {/* Item 3 */}
              <div className='group/item flex gap-4 p-4 rounded-2xl hover:bg-gray-900/40 border border-transparent hover:border-gray-800/60 transition-all duration-300'>
                <div className='flex flex-col items-center pt-1.5'>
                  <div className='w-2.5 h-2.5 rounded-full bg-purple-400 ring-4 ring-purple-400/20 group-hover/item:scale-125 transition-transform duration-300'></div>
                </div>
                <p className='text-gray-400 group-hover/item:text-gray-300 text-sm md:text-base font-light leading-relaxed transition-colors duration-300'>
                  DevOps & Cloud Integration: Proficient in automating software workflows using Git/GitHub, containerizing applications with Docker, and establishing robust CI/CD pipelines.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;