import React from 'react';

const Projects = () => {
  
  const projectList = [
    {
      title: 'MERN Task Manager with DevOps',
      description: 'A robust task management application built using the MERN stack and enhanced with professional DevOps practices. Features automated CI/CD pipelines, containerized environments, and cloud deployment infrastructure.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Docker', 'CI/CD'],
      githubLink: 'https://github.com/ashensb/mern-task-manager-devops'
    },
    {
      title: 'Y3S1 Fullstack Group Project',
      description: 'An advanced full-stack enterprise web application developed as a collaborative group project. Built utilizing modern architecture guidelines, state management, and optimized database layouts.',
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Git'],
      githubLink: 'https://github.com/ashensb/Y3S1-group-project' 
    }
  ];

  return (
    <section id='projects' className='py-28 px-6 max-w-7xl mx-auto relative overflow-hidden'>
      
      {/* Background Decorative Gradient Spotlight */}
      <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10 pointer-events-none'></div>

      {/* Title Section */}
      <div className='text-center mb-16' data-aos='fade-up'>
        <h4 className='text-cyan-400 font-bold tracking-widest text-xs uppercase mb-2'>My Recent Work</h4>
        <h2 className='text-4xl md:text-5xl font-black text-white tracking-wide relative inline-block mb-4'>
          Featured Projects
        </h2>
        <div className='h-[3px] w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-md shadow-cyan-400/20'></div>
      </div>

      {/* Projects Grid */}
      <div className='grid md:grid-cols-2 gap-8 relative z-10'>
        {projectList.map((project, idx) => (
          <div 
            key={idx}
            className='bg-gradient-to-b from-gray-900/40 to-gray-950/60 border border-gray-800/80 rounded-3xl p-6 md:p-8 backdrop-blur-xl hover:border-cyan-500/30 shadow-xl hover:shadow-cyan-500/5 transition-all duration-500 group flex flex-col justify-between min-h-[340px]'
            data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <div>
              {/* Top Row: Folder Icon & GitHub Link */}
              <div className='flex justify-between items-center mb-6'>
                <span className='text-3xl text-cyan-400 bg-cyan-500/10 p-3 rounded-xl border border-cyan-500/10 group-hover:scale-110 transition-transform duration-300'>📁</span>
                <a 
                  href={project.githubLink} 
                  target='_blank' 
                  rel='noreferrer'
                  className='text-gray-400 hover:text-white bg-gray-900 border border-gray-800 hover:border-cyan-500/50 p-2.5 rounded-full transition-all duration-300 shadow-md flex items-center justify-center'
                  aria-label='View GitHub Repository'
                >
                  {/* Inline SVG for GitHub Icon */}
                  <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                  </svg>
                </a>
              </div>

              {/* Project Title */}
              <h3 className='text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 tracking-wide'>
                {project.title}
              </h3>

              {/* Project Description */}
              <p className='text-gray-400 text-sm md:text-base font-light leading-relaxed mb-6 tracking-wide'>
                {project.description}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className='flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-900/60'>
              {project.tags.map((tag, tagIdx) => (
                <span 
                  key={tagIdx} 
                  className='bg-[#111827]/80 text-gray-400 border border-gray-800/60 px-3 py-1 rounded-md text-xs font-medium tracking-wide'
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;