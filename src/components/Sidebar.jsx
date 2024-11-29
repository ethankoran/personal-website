"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const Sidebar = () => {
  const [hovered, setHovered] = useState(null);
  const pathname = usePathname(); // Use this hook to get the current pathname
  const router = useRouter();

  const navItems = [
    { name: 'Home', path: '/', image: '/images/homeicon.png' },
    { name: 'About', path: '#about', image: '/images/homeicon.png' },
    { name: 'Experience', path: '#experience', image: '/images/homeicon.png' },
    { name: 'Projects', path: '#projects', image: '/images/homeicon.png' },
    { name: 'Contact', path: '#contact', image: '/images/homeicon.png' },
  ];

  return (
    <div className="fixed h-screen w-20 bg-transparent flex flex-col items-center ml-2 justify-center z-99">
      {navItems.map((item, index) => {
        const isActive = pathname === item.path; // Use `pathname` here
        return (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => router.push(item.path)}
            className={`flex items-center justify-center h-14 w-14 mb-3 cursor-pointer relative rounded-full ${
              isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
            } hover:bg-blue-600 hover:text-white transition-all duration-300 group`}
          >
            <img src={item.image} alt={item.name} className="w-7 h-7" />
            {hovered === index && (
              <span className="absolute left-full ml-1 bg-blue-500 text-white text-sm px-2 py-1 rounded-lg">
                {item.name}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
