import { useContext } from "react"
import { assets } from "../assets/assets"
import { PlayerContext } from "../context/PlayerContext"

const Player = () => {

  const {track, seekBar, seekBG ,playerStatus, play, pause,time, previous, next, seekSong} = useContext(PlayerContext); 


  return (
    <div className="fixed w-full h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
            <p className="text-lg text-white font-bold">{track.name}</p>
            <p className="text-xs font-semibold">{track.description.slice()}</p>
        </div>
      </div>


      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
            <img className="w-6 cursor-pointer invert" src={assets.shuffle_icon} alt="" />
            <img onClick={previous} className="w-6 cursor-pointer invert" src={assets.prev_button} alt="" />

          {/* Logic for Play and Pause btn  */}

            {playerStatus?<img onClick={pause} className="w-6 cursor-pointer invert" src={assets.pause_button} alt="" />
            :<img onClick={play} className="w-6 cursor-pointer invert" src={assets.play_button} alt="" />}

            
            <img onClick={next} className="w-6 cursor-pointer invert" src={assets.next_button} alt="" />
            <img className="w-6 cursor-pointer invert" src={assets.loop_ico} alt="" />
        </div>

        <div className="flex items-center gap-5">
            <p className="text-sm">{time.currentTime.minute}:{time.currentTime.second}</p>
            <div ref={seekBG} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                <hr ref={seekBar} className="h-1 border-none w-0 bg-[#1ed760] rounded-full"/>
            </div>
            <p className="text-sm">{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-6 invert" src={assets.shuffle_icon} alt="" />
        <img className="w-6 invert" src={assets.radio_ico} alt="" />
        <img className="w-6 invert" src={assets.stack_ico} alt="" />
        <img className="w-6 invert" src={assets.volume_ico} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded">

        </div>
        <img className="w-6 invert" src={assets.resize_ico} alt="" />
        {/* <img className="w-6 invert" src={assets.shuffle_icon} alt="" />
        <img className="w-6 invert" src={assets.shuffle_icon} alt="" /> */}
      </div>
    </div>
  )
}

export default Player
