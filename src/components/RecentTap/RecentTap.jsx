import TabCard from "../Cards/TabCard";
import { recent } from "../../Recent";

const RecentTap = () => {
  return (
    <div className="recent flex-[1.3] h-[80vh] overflow-y-scroll bg-[#242424]">
      <div className="title flex justify-between sticky h-[30px] top-0 bg-[#242424] p-2 z-[999] items-center">
        <h1 className="text-white/50">Recently Played</h1>
        <span className="text-[#F9762D] text-[14px] cursor-pointer">See all</span>
      </div>
      <div className="div  ">
        {recent.map((item) => (
          <TabCard recent={item} key={item.artist} />
        ))}
      </div>
    </div>
  );
}

export default RecentTap
