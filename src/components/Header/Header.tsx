'use client';

import Link from 'next/link';
import { useContext, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { useSession } from 'next-auth/react';
import ThemeContext from '@/context/themeContext';
import Image from 'next/image';

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-6 px-4 container mx-auto bg-background-light dark:bg-background-dark shadow-sm transition-all duration-300">
      {/* Top row: Logo and right-aligned controls */}
      <div className="flex items-center justify-between">
        <Link 
          href="/" 
          className="font-black text-3xl md:text-4xl text-primary dark:text-secondary hover:text-secondary dark:hover:text-primary transition-colors duration-300"
        >
          LuxStay
        </Link>

        <div className="flex items-center space-x-4">
          {/* Desktop controls: profile and dark mode */}
          <ul className="hidden md:flex items-center space-x-4">
            <li className="transition-transform duration-300 hover:scale-110">
              {session?.user ? (
                <Link href={`/users/${session.user.id}`}>
                  {session.user.image ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary dark:ring-secondary transition-all duration-300">
                      <Image
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <FaUserCircle className="w-8 h-8 text-primary dark:text-secondary cursor-pointer transition-colors duration-300" />
                  )}
                </Link>
              ) : (
                <Link href="/auth">
                  <FaUserCircle className="w-8 h-8 text-primary dark:text-secondary cursor-pointer transition-colors duration-300" />
                </Link>
              )}
            </li>
            <li className="transition-transform duration-300 hover:scale-110">
              {darkTheme ? (
                <MdOutlineLightMode
                  className="w-8 h-8 text-primary dark:text-secondary cursor-pointer transition-colors duration-300"
                  onClick={() => {
                    setDarkTheme(false);
                    localStorage.removeItem('hotel-theme');
                  }}
                />
              ) : (
                <MdDarkMode
                  className="w-8 h-8 text-primary dark:text-secondary cursor-pointer transition-colors duration-300"
                  onClick={() => {
                    setDarkTheme(true);
                    localStorage.setItem('hotel-theme', 'true');
                  }}
                />
              )}
            </li>
          </ul>
          {/* Mobile burger menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-primary dark:text-secondary focus:outline-none transition-colors duration-300"
            >
              {menuOpen ? <HiOutlineX className="w-8 h-8" /> : <HiOutlineMenu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation row */}
      <nav className={`mt-4 ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col sm:flex-row items-center justify-center font-medium space-y-2 sm:space-y-0 sm:space-x-8">
          <li className="relative group">
            <Link 
              href="/" 
              className="text-primary dark:text-secondary hover:text-secondary dark:hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary dark:bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link 
              href="/rooms" 
              className="text-primary dark:text-secondary hover:text-secondary dark:hover:text-primary transition-colors duration-300"
            >
              Rooms
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary dark:bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link 
              href="/contact" 
              className="text-primary dark:text-secondary hover:text-secondary dark:hover:text-primary transition-colors duration-300"
            >
              Contact
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary dark:bg-primary transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
