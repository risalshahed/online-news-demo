import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/logo.png'
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", name: "" },
    { path: "/national", name: "জাতীয়" },
    { path: "/international", name: "আন্তর্জাতিক" },
    { path: "/sport", name: "খেলাধুলা" },
    { path: "/entertainment", name: "বিনোদন" }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "https://facebook.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
  ];

  const navItems = navLinks.map((link, index) => (
    <li key={index}>
      <Link style={{ backgroundColor: 'transparent', color: '#ffff' }} className="lg:text-2xl text-sm" to={link.path}>
        {link.name}
      </Link>
    </li>
  ));

  const socialIcons = socialLinks.map((social, index) => (
    <Link key={index} to={social.href} className="text-3xl">
      {social.icon}
    </Link>
  ));

  return (
    <nav className="navbar bg-red-700 px-px sm:px-6 md:px-16 py-4 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] px-8 shadow bg-red-700 w-52">
            {navItems}
          </ul>
        </div>
        
        <img
          src={logo} alt="logo"
          className='cursor-pointer w-3/4 sm:w-auto'
          onClick={() => navigate('/')}
        />
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      
      <div className="gap-x-2 sm:gap-x-4 mx-1 sm:mx-6 flex navbar-end">
        {socialIcons}
      </div>
    </nav>
  );
}

export default Navbar;