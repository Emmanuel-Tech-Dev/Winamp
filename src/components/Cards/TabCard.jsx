import React from 'react'



const TabCard = ({recent}) => {
  return (
    <div className="tabs hover:bg-neutral-600 transition-all duration-300 ease-in-out">
      <div className="content p-2 flex items-baseline justify-between">
        <div className="left flex items-center gap-x-2">
          <img className="w-[60px]" src={recent.cover} />
          <div className="desc text-[#F9762D]">
            <h1 className="text-[14px]">{recent.musicName.slice(0, 15)}...</h1>
            <span className="text-[12px]">{recent.artist}</span>
          </div>
        </div>
        <span className="text-[12px] text-white/50">{recent.time}</span>
      </div>
    </div>
  );
}

export default TabCard
