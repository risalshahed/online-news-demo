import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    const navItems = <>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className="text-2xl"  to="/">জাতীয়</Link></li>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className="text-2xl"  to="international">আন্তর্জাতিক</Link></li>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className="text-2xl"  to="sport">খেলাধুলা</Link></li>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className="text-2xl"  to="entertainment">বিনোদন</Link></li>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className="text-2xl"  to="country">সারাদেশ</Link></li>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className="text-2xl"  to="campus">ক্যাম্পাস</Link></li>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className="text-2xl"  to="worldVideo">ভিডিও</Link></li>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className="text-2xl"  to="ramadan">রমজান</Link></li>
  </>
  return (
    <>
      <div className="navbar  bg-black py-6 text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content -ml-5 z-[1] px-8 rounded-b-2xl  shadow bg-black w-52">
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
  <div className="navbar-end gap-4">
    <a className="text-4xl"> <i class="fa-brands fa-facebook"></i></a>
    <a className="text-4xl"><i class="fa-brands fa-youtube"></i></a>
    <a className="text-4xl"> <i class="fa-brands fa-instagram"></i></a>
  </div>
</div>
     </>
  )
}
