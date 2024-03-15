import React from 'react'
import { Link } from 'react-router-dom'
/* জাতীয়
আন্তর্জাতিক
খেলাধুলা
বিনোদন
সারাদেশ
ক্যাম্পাস
ভিডিও
রমজান
 */
export default function Navbar() {
    const navItems = <>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className=""  to="/">জাতীয়</Link></li>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className=""  to="international">আন্তর্জাতিক</Link></li>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className=""  to="sport">খেলাধুলা</Link></li>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className=""  to="entertainment">বিনোদন</Link></li>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className=""  to="country">সারাদেশ</Link></li>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className=""  to="campus">ক্যাম্পাস</Link></li>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className=""  to="worldVideo">ভিডিও</Link></li>
    <li ><Link  style={{ backgroundColor:'transparent', color: '#ffff'}} className=""  to="ramadan">রমজান</Link></li>
  </>
  return (
    <>
      <div className="navbar  bg-black text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black  rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Jumana Tv live</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <a className="text-2xl"> <i class="fa-brands fa-facebook"></i></a>
    <a className="text-2xl"><i class="fa-brands fa-youtube"></i></a>
    <a className="text-2xl"> <i class="fa-brands fa-instagram"></i></a>
  </div>
</div>
     </>
  )
}