import {
  AiTwotoneAppstore,
  AiFillHeart,
  AiTwotoneSetting,
} from 'react-icons/ai';
import { BsSoundwave, BsCollectionPlayFill , BsFillSunFill } from 'react-icons/bs';
import { HiSpeakerWave } from 'react-icons/hi2';
import { MdLibraryMusic } from 'react-icons/md';
import { FaCompactDisc } from 'react-icons/fa';
import {PiMoonFill} from 'react-icons/pi'






const NavBar = () => {
  return (
    <div className="flex-[1] flex flex-col justify-between  bg-[#242424]">
      <div className="top-nav  p-5 flex flex-col gap-y-6 h-[30vh]">
        <div className="links flex items-center gap-x-3 cursor-pointer text-[#F9762D] transition-all duration-300 ease-in-out ">
          <AiTwotoneAppstore size={20} />
          Home
        </div>
        <div className="links flex items-center gap-x-3 cursor-pointer hover:text-[#F9762D] transition-all duration-300 ease-in-out my-5">
          <BsSoundwave size={20} />
          Discover
        </div>
        <div className="links flex items-center gap-x-3 cursor-pointer hover:text-[#F9762D] transition-all duration-300 ease-in-out ">
          <BsCollectionPlayFill size={20} />
          Videos
        </div>
      </div>
      <div className="bottom-nav flex flex-col  justify-between">
        <h1 className="text-white/50 px-5 text-[20px] font-[600]">
          My Collections
        </h1>
        <div className="tab p-5 mt-5 flex flex-col justify-between h-[35vh]">
          <div className="links flex items-center gap-x-3 cursor-pointer hover:text-[#F9762D] transition-all duration-300 ease-in-out ">
            <HiSpeakerWave size={20} />
            Now playing
          </div>
          <div className="links flex items-center gap-x-3 cursor-pointer hover:text-[#F9762D] transition-all duration-300 ease-in-out  my-5">
            <MdLibraryMusic size={20} />
            My Playlists
          </div>
          <div className="links flex items-center gap-x-3 cursor-pointer hover:text-[#F9762D] transition-all duration-300 ease-in-out ">
            <FaCompactDisc size={20} />
            My Albums
          </div>
          <div className="links flex items-center gap-x-3 cursor-pointer hover:text-[#F9762D] transition-all duration-300 ease-in-out  mt-5">
            <AiFillHeart size={20} />
            My Favorites
          </div>
        </div>
        <div className="setions border-t border-[#9F9F9F] p-5 flex items-center justify-between">
          <AiTwotoneSetting size={20} />
          <div className="toggle flex  items-center  gap-x-1">
            <BsFillSunFill className="text-[#F9762D]" />
            <input
              className="mr-1  h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#2DA623] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-[#fefefe] checked:after:shadow-[0_3px_1px_-2px_rgba(22, 22, 22),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
            />
            <PiMoonFill className=" text-neutral-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
