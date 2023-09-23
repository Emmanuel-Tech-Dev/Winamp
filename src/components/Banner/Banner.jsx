import {FaHeadphones} from 'react-icons/fa'
const Banner = () => {
  return (
    <div className="w-full h-[290px] flex justify-between bg-white bg-Bg_image bg-cover rounded-[10px]">
      <div className="p-4">
        <h1 className="h1 px-3  py-1 bg-[#F92D2D] w-[200px] text-center text-white font-[700] text-[32px] ">
          Ololade mi
        </h1>
        <h1 className="h1 px-3 py-1 bg-[#F92D2D] w-[130px] ml-[180px] mt-4 mb-2 text-center text-white font-[700] text-[32px] ">
          Asake
        </h1>
        <span className="text-black flex items-center gap-x-3 mt-6 font-bold">
        <FaHeadphones size={24}/>  1,293,984. Monthly Listeners
        </span>
        <div className="btn">
          <button className="px-[19px] mt-4 py-[11px] bg-[#F9762D] font-semibold text-[18px] rounded-[10px]">
            Listen to songs
          </button>
        </div>
      </div>
      <img
        className="float-right rounded-tr-[10px] rounded-br-[10px]"
        src="./images/asake.png"
      />
    </div>
  );
}

export default Banner

