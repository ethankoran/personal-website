"use client";

import { FloatingDock } from '@/components/FloatingDock'
import { useEffect } from 'react'
import Typed from 'typed.js'

export default function Home() {
  const floating_dock_items = [
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ethan-koran/',
      icon: <img
              src='/images/linkedin.svg'
              alt='LinkedIn'
              className="w-full h-full rounded-full"
            />,
    },
    {
      title: 'GitHub',
      href: 'https://github.com/ethankoran',
      icon: <img 
              src='/images/github.png'
              alt="GitHub"
              className="w-full h-full object-cover rounded-full bg-white"
            />
    },
    {
      title: 'Email',
      href: '#contact',
      icon: <img
              src='/images/gmail.jpeg'
              alt='Email'
              className="w-full h-full object-cover rounded-full bg-white"  
            />,
    },
    {
      title: 'Resume',
      href: '/Ethan_Koran_Resume.pdf',
      icon: <img
              src='/images/resume.png'
              alt='Resume'
              className="w-full h-full object-cover rounded-full bg-rose-400"
            />
    }
  ];

  useEffect(() => {
    const options = {
      strings: ["Student", "Web Designer", "Software Developer", "Musician"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 1000,
      loop: true,
      showCursor: true
    };

    const typed = new Typed(".typed", options);

    return () => {
      typed.destroy();
    }
  }, []);

  return (
    <main>
      <div className="bg-gray-100 text-gray-900">


        {/* Home Section */}
        <section 
          id="home" 
          className="min-h-screen flex flex-col items-center justify-center bg-white bg-cover bg-top bg-no-repeat relative text-center p-20"
          style={{ backgroundImage: 'url(/images/me.jpg)' }}>
          <div className="absolute inset-0 bg-white bg-opacity-60 z-0"></div> 
          <div className="relative z-10 mt-24">
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-600">Ethan Koran</h1>
            <p className="text-2xl sm:text-3xl mt-4 text-slate-600 font-medium">
              I'm a <span className="typed text-blue-500 font-medium z-10"></span><span className="typed-cursor" aria-hidden="true"></span>
            </p>
          </div>
          <FloatingDock
              items={floating_dock_items}
              desktopClassName="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
              mobileClassName="absolute bottom-8 right-8 z-10"
          />
        </section>
        {/* About Section */}
        <section id="about" className="min-h-screen bg-neutral-50 py-10">
          <h2 className="text-3xl font-semibold text-center mb-10 text-slate-700">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center px-6">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 pl-40">
              <img 
                src='/images/aboutmepic.jpeg'
                alt="About Me"
                className="w-full h-auto object-cover opacity-85"
                />
            </div>
            <div className="max-w-6xl mx-auto px-6">
              <p className="text-lg text-wrap">
                Hi! My name is Ethan, and I am a current Junior at the University of Notre Dame studying Computer Science with a Minor in Engineering Coporate Practice, originally from Cincinnati, Ohio...
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-10">My Experience</h2>
            <ul className="space-y-6">
              <li className="bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold">Job Title at Company 1</h3>
                <p className="text-gray-700">Details about your role and achievements here.</p>
              </li>
              <li className="bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold">Job Title at Company 2</h3>
                <p className="text-gray-700">Details about your role and achievements here.</p>
              </li>
              {/* Add more experience items as needed */}
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen bg-gray-800 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-10">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-gray-700 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold">Project 1</h3>
                <p className="text-gray-300">Short description of the project here.</p>
              </div>
              {/* Project 2 */}
              <div className="bg-gray-700 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold">Project 2</h3>
                <p className="text-gray-300">Short description of the project here.</p>
              </div>
              {/* Project 3 */}
              <div className="bg-gray-700 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold">Project 3</h3>
                <p className="text-gray-300">Short description of the project here.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen bg-blue-600 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-10">Contact Me</h2>
            <p>If you'd like to get in touch, feel free to reach out through the contact form or via email.</p>
            <a href="mailto:youremail@example.com" className="text-yellow-500 hover:text-yellow-300 mt-6 inline-block">Email Me</a>
          </div>
        </section>
      </div>
    </main>
  )
}
