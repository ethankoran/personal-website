"use client";

import { FloatingDock } from '@/components/FloatingDock'
import { useEffect } from 'react'
import React from "react";
import Typed from 'typed.js'
import Link from 'next/link'
import Image from "next/image";
import { FloatingNav } from "@/components/FloatingNavBar";
import { Carousel, Card } from "@/components/CardCarousel";

export default function Home() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about"},
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" }
  ];

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

  const DummyContent = () => {
    return ( <div> Hello </div> ) 
  }

  const experiences = [
    {
      category: "2022-2026",
      title: "My time at Notre Dame",
      src: "/images/dome.jpg",
      content: <DummyContent />,
    },
    {
      category: "August 2024 - Present",
      title: "IrishSat NASA CubeSat Launch Initiative",
      src: "/images/satellite.jpg",
      content: <DummyContent />,
    },
    {
      category: "April 2024 - Present",
      title: "Sports Biomechanics Research Lab",
      src: "/images/softball.jpeg",
      content: <DummyContent />,
    },
    {
      category: "May 2023 - July 2023",
      title: "ND Study Abroad - London, England",
      src: "/images/london.jpeg",
      content: <DummyContent />,
    },
    {
      category: "July 2024",
      title: "Alumni Family Volunteer Camp",
      src: "/images/me.jpg",
      content: <DummyContent />,
    },
    {
      category: "September 2023 - May 2024",
      title: "Computer Science for Good",
      src: "/images/me.jpg",
      content: <DummyContent />,
    },
    {
      category: "March 2015 - September 2021",
      title: "Boy Scouts of America",
      src: "/images/me.jpg",
      content: <DummyContent />,
    }
  ]

  const cards = experiences.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));


  useEffect(() => {
    const iamoptions = {
      strings: ["Student", "Web Designer", "Software Developer", "Musician", "World Traveler"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 1000,
      loop: true,
      showCursor: true
    };

    const typed = new Typed(".typed", iamoptions);

    return () => {
      typed.destroy();
    }
  }, []);

  return (
    <main className="flex">
      <FloatingNav navItems={navItems} className="" />
      <div className="bg-gray-100 text-gray-900 z-1">
        {/* Home Section */}
        <section 
          id="home" 
          className="min-h-screen flex flex-col items-center justify-center bg-white bg-no-repeat bg-cover bg-top relative text-center p-20 bg-[url('/images/me.jpg')] md:bg-[url('/images/me_cropped.jpeg')]"
          >
          <div className="absolute inset-0 bg-white bg-opacity-60 z-0"></div> 
          <div className="relative z-10 lg:mt-24">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-600">Ethan Koran</h1>
            <p className="text-2xl lg:text-3xl md:mt-4 mt-2 text-slate-600 font-medium">
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
          <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-4xl text-center mb-10 font-bold text-neutral-700 dark:text-neutral-200 font-sans">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center px-6">
            <div className="w-3/4 md:w-3/4 lg:w-1/2 mb-6 md:mb-0">
              <img 
                src='/images/aboutmepic.jpeg'
                alt="About Me"
                className="w-auto h-auto object-cover opacity-85"
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
          {/* <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">My Experience</h2> */}
          <div className="lg:w-full h-full md:w-1/2 px-10">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
              My Experience
            </h2>
            {/* <Carousel items={cards}/>  */}
          </div>
          {/* </div> */}
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
