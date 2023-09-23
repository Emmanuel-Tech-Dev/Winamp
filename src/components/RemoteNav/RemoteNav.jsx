import { recent } from '../../Recent';
import {
  BiShuffle,
  BiSkipNext,
  BiSkipPrevious,
  BiPlay,
  BiPause,
  BiRepeat,
} from 'react-icons/bi';
import { AiFillSound } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';

const musicData = [
  {
    music:
      'http://localhost:5173/src/components/assets/Rotimi_ft_50_Cent_TI_-_Nobody_Talkmuzik.mp3',
  },

  { music: 'http://localhost:5173/src/components/assets/6LACK_-_Loyal.mp3' },
];

const RemoteNav = () => {
  const [play, setPlay] = useState(false);
  const [range, setRange] = useState(0);
  const [fTime, setFt] = useState('0:00');
  const [sTime, setSt] = useState('0:00'); // Initialize total duration to '0:00'

  const [currentSong, setCurrentSong] = useState(0);

  const audioELem = useRef();

  const handlePlay = () => {
    setPlay(!play);
    if (!play) {
      audioELem.current.play();
    } else {
      audioELem.current.pause();
    }
  };

  const playTime = () => {
   
    const duration = audioELem.current.duration;
    const currentTime = audioELem.current.currentTime;
   
    setFt(convertToTime(currentTime));
    setSt(convertToTime(duration)); // Update total duration
   
    if (Math.abs(currentTime - duration) < 0.1) {
     
      playNextSong();

    }
    
    //update the range value
    const newRange = (currentTime / duration) * 100;
    setRange(newRange);
  };

  function convertToTime(seconds) {
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedTime = `${minutes}:${String(remainingSeconds).padStart(
      2,
      '0'
    )}`

    return formattedTime;
  }

  //controls the current music time with the input type range
  const handleChange = (e) => {
   
    const newRangeValue = parseFloat(e.target.value); //getting the new range value as
    const newCurrentTime = (newRangeValue / 100) * audioELem.current.duration;

    audioELem.current.currentTime = newCurrentTime;

    setRange(newRangeValue);
  };

  const playNextSong = () => {
    if(currentSong < musicData.length - 1){
      setCurrentSong(currentSong + 1)
    }
  } 
  
  const playPrevSong = () => {
    if(currentSong < musicData.length + 1){
      setCurrentSong(currentSong - 1)
    }
  }


  useEffect(() => {
   
    audioELem.current.src = musicData[currentSong].music
    audioELem.current.load()

    if(play){
  audioELem.current.play()
 }

}, [currentSong , play])


  


  return (
    <div className="dd h-[6dvh] w-full absolute bottom-14 backdrop-blur-[10px] ">
      <div className="p-5 flex justify-between items-center w-full">
        <audio
          src={currentSong.music}
          ref={audioELem}
          onTimeUpdate={playTime}
          onLoadedMetadata={playTime} // Trigger playTime once metadata is loaded
        />
        <div className="tracklist flex gap-5 items-center">
          <img src={recent[0].cover} className="w-[60px]" />
          <div className="title">
            <h1 className="text-[16px] font-semibold">{recent[0].musicName}</h1>
            <span className="text-[12px]">{recent[0].artist}</span>
          </div>
        </div>
        <div className="control">
          <div className="top">
            <input
              type="range"
              className="w-[600px]"
              min={0}
              max={100}
              value={range}
              onChange={handleChange}
            />
            <div className="number flex justify-between">
              <span>{fTime}</span>
              <span>{sTime}</span>
            </div>

            <div className="controls flex justify-center items-center gap-4">
              <BiShuffle size={20} />
              <BiSkipPrevious size={32} onClick={playPrevSong} />

              {!play ? (
                <BiPlay size={42} onClick={handlePlay} />
              ) : (
                <BiPause size={42} onClick={handlePlay} />
              )}

              <BiSkipNext
                size={32}
                onClick={playNextSong}
              />
              <BiRepeat size={20} />
            </div>
          </div>
          <div className="bottom"></div>
        </div>
        <div className="volume flex items-center gap-2">
          <AiFillSound size={20} />
          <input type="range" className="w-[200px]" min={0} max={100} />
        </div>
      </div>
    </div>
  );
};

export default RemoteNav;
