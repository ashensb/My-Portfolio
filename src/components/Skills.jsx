import React from 'react';

const Skills = () => {
  const devSkills = ['HTML/CSS/JS', 'React.js', 'Node.js', 'Express', 'MongoDB/MySQL', 'REST APIs'];
  const devopsSkills = ['Git & GitHub', 'Docker', 'Kubernetes', 'CI/CD (Actions)', 'AWS (EC2, S3)', 'Linux'];

  return (
    <section id='skills' className='py-28 px-6 max-w-7xl mx-auto relative overflow-hidden'>
      
      {/* Background Decorative Light */}
      <div className='absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10 pointer-events-none'></div>

      {/* Title Section */}
      <div className='text-center mb-16' data-aos='fade-up'>
        <h4 className='text-cyan-400 font-bold tracking-widest text-xs uppercase mb-2'>What I Am Good At</h4>
        <h2 className='text-4xl md:text-5xl font-black text-white tracking-wide relative inline-block mb-4'>
          My Expertise
        </h2>
        <div className='h-[3px] w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-md shadow-cyan-400/20'></div>
      </div>

      {/* Cards Grid */}
      <div className='grid md:grid-cols-2 gap-8 relative z-10'>
        
        {/* Development Card */}
        <div 
          className='bg-gradient-to-b from-gray-900/50 to-gray-950/50 p-8 md:p-10 rounded-3xl border border-gray-800/80 backdrop-blur-xl hover:border-cyan-500/30 shadow-xl hover:shadow-cyan-500/5 transition-all duration-500 group' 
          data-aos='fade-right'
        >
          <div className='flex items-center gap-3 mb-8'>
            <span className='text-2xl bg-cyan-500/10 p-3 rounded-xl border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300'>💻</span>
            <h3 className='text-2xl font-bold text-white tracking-wide'>
              Software <span className='text-cyan-400'>Development</span>
            </h3>
          </div>
          
          <div className='flex flex-wrap gap-3'>
            {devSkills.map((skill, idx) => (
              <span 
                key={idx} 
                className='bg-gray-900/60 text-gray-300 px-4 py-2.5 rounded-xl font-medium text-sm border border-gray-800 hover:border-cyan-400/40 hover:text-cyan-400 hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* DevOps Card */}
        <div 
          className='bg-gradient-to-b from-gray-900/50 to-gray-950/50 p-8 md:p-10 rounded-3xl border border-gray-800/80 backdrop-blur-xl hover:border-purple-500/30 shadow-xl hover:shadow-purple-500/5 transition-all duration-500 group' 
          data-aos='fade-left'
        >
          <div className='flex items-center gap-3 mb-8'>
            <span className='text-2xl bg-purple-500/10 p-3 rounded-xl border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform duration-300'>🚀</span>
            <h3 className='text-2xl font-bold text-white tracking-wide'>
              DevOps & <span className='text-purple-400'>Cloud</span>
            </h3>
          </div>
          
          <div className='flex flex-wrap gap-3'>
            {devopsSkills.map((skill, idx) => (
              <span 
                key={idx} 
                className='bg-gray-900/60 text-gray-300 px-4 py-2.5 rounded-xl font-medium text-sm border border-gray-800 hover:border-purple-400/40 hover:text-purple-400 hover:bg-gray-900 hover:-translate-y-0.5 transition-all duration-300 cursor-default shadow-sm'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;