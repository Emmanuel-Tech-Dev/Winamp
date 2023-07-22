import React from 'react'
import {BiSolidSearchAlt2} from 'react-icons/bi'
const TopBar = () => {
  return (
    <div className="h-[10dvh] bg-[#20202040] flex justify-between items-center px-5">
      <div className="left">
        <label htmlFor="">
          <img className="w-[120px]" src="../images/brand Logo.png" />
        </label>
      </div>
      <div className="mid-left ">
        <ul className="flex gap-x-5 font-[600]">
          <li className="link cursor-pointer hover:opacity-[.8] transition-all duration-300 ease-in-out">
            Music
          </li>
          <li className="link-1 cursor-pointer hover:opacity-[.8] transition-all duration-300 ease-in-out">
            Podcasts
          </li>
        </ul>
      </div>
      <div className="mid-right">
        <div className="input flex items-center bg-[#EEEEEE] px-3 rounded-[8px]">
          <BiSolidSearchAlt2 size={24} color="#12121250" />

          <input
            className="p-2 w-[300px] indent-2 bg-transparent focus:outline-none text-neutral-900"
            type="text"
            placeholder="Search for music, albums and artist .."
          />
        </div>
      </div>
      <div className="rigth">
        <div className="profile flex items-center gap-x-5">
          <span className="text-[#F9762D] font-[600]">Hi , Annabel</span>
          <img className="w-[40px]" src="./images/Ellipse.png" />
        </div>
      </div>
    </div>
  );
}

export default TopBar
