import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className='py-24 px-6 max-w-3xl mx-auto flex flex-col items-center justify-center min-h-screen'>
      {/* Title Divider Line */}
      <div className='w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6' data-aos='fade-up'></div>
      
      <p className='text-gray-400 text-center mb-10 text-lg' data-aos='fade-up' data-aos-delay='100'>
        Please fill out the form below to discuss any work opportunities.
      </p>

      {/* Contact Form */}
      <form className='w-full flex flex-col gap-5' data-aos='fade-up' data-aos-delay='200'>
        <input 
          type='text' 
          placeholder='Your Name' 
          className='w-full bg-[#1f2937]/40 border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition duration-300'
          required
        />
        <input 
          type='email' 
          placeholder='Your Email' 
          className='w-full bg-[#1f2937]/40 border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition duration-300'
          required
        />
        <textarea 
          placeholder='Your Message' 
          rows='6' 
          className='w-full bg-[#1f2937]/40 border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition duration-300 resize-none'
          required
        ></textarea>

        {/* Submit Button */}
        <button 
          type='submit' 
          className='w-full py-4 mt-2 rounded-full font-bold text-white bg-gradient-to-r from-cyan-400 to-purple-600 hover:opacity-90 transition duration-300 shadow-lg shadow-cyan-500/20 text-center'
        >
          Submit
        </button>
      </form>

     
    </section>
  );
};

export default Contact;