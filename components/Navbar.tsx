import NavbarItem from '../components/NavbarItem';
import MobileMenu from '../components/MobileMenu';
import AccountMenu from '../components/AccountMenu';
import Image from 'next/image';
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs';
import { useCallback, useEffect, useState } from 'react';
import Logo from '../public/images/logo.png';
import Profile from '../public/images/default-blue.png';

const TOP_OFFSET = 66;

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > TOP_OFFSET){
          setShowBackground(true);
        } else {
          setShowBackground(false);
        }
      }
        console.log("test");
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
  }, []);

  const toogleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, [])

  const toogleAccountMenu = useCallback(() => {
    setAccountMenu((current) => !current);
  }, [])

  return (
    <nav className="w-full fixed z-40">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-black' : ''}`}>
        <Image src={Logo} className="h-4 lg:h-7" alt="Logo" />
        <div className="flex-row ml-8 gap-7 sm:hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>
        <div onClick={toogleMobileMenu} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
          <p className='text-white text-sm'>Browse</p>
          <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu}/>
        </div>
        <div className='flex flex-row ml-auto gap-7 items-center'>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsSearch />
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsBell />
          </div>
          <div onClick={toogleAccountMenu} className='flex flex-row items-center gap-2 cursor-pointer transition'>
              <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                <Image src={Profile} alt="Profile" />
              </div>
              <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
              <AccountMenu  visible={showAccountMenu}/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
