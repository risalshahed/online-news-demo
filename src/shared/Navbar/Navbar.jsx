import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const navLinks = [
    { path: "/", name: "জাতীয়" },
    { path: "/international", name: "আন্তর্জাতিক" },
    { path: "/sport", name: "খেলাধুলা" },
    { path: "/entertainment", name: "বিনোদন" },
    { path: "/country", name: "সারাদেশ" },
    { path: "/campus", name: "ক্যাম্পাস" },
    { path: "/worldVideo", name: "ভিডিও" },
    { path: "/ramadan", name: "রমজান" },
  ];

  const socialLinks = [
    { icon: faFacebook, href: "https://facebook.com" },
    { icon: faYoutube, href: "https://youtube.com" },
    { icon: faInstagram, href: "https://instagram.com" },
  ];

  const navItems = navLinks.map((link, index) => (
    <li key={index}>
      <Link style={{ backgroundColor: 'transparent', color: '#ffff' }} className="lg:text-2xl text-sm" to={link.path}>
        {link.name}
      </Link>
    </li>
  ));

  const socialIcons = socialLinks.map((social, index) => (
    <Link key={index} to={social.href} className="text-4xl">
      <FontAwesomeIcon icon={social.icon} />
    </Link>
  ));

  return (
    <>
      <div className="navbar bg-black py-6 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content -ml-5 z-[1] px-8 rounded-b-2xl shadow bg-black w-52">
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Jamuna|Tv</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end gap-4 mx-6">
          {socialIcons}
        </div>
      </div>
    </>
  );
}

export default Navbar;