import { assets, songsData } from "../assets/assets"

const Player = () => {
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={songsData[0].image} alt="" />
        <div>
            <p className="text-lg text-white font-bold">{songsData[0].name}</p>
            <p className="text-xs font-semibold">{songsData[0].description.slice()}</p>
        </div>
      </div>


      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
            <img className="w-6 cursor-pointer invert" src={assets.shuffle_icon} alt="" />
            <img className="w-6 cursor-pointer invert" src={assets.prev_button} alt="" />
            <img className="w-6 cursor-pointer invert" src={assets.play_button} alt="" />
            <img className="w-6 cursor-pointer invert" src={assets.next_button} alt="" />
            <img className="w-6 cursor-pointer invert" src={assets.loop_ico} alt="" />
        </div>

        <div className="flex items-center gap-5">
            <p className="text-sm">1:09</p>
            <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                <hr className="h-1 border-none w-0 bg-green-400 rounded-full"/>
            </div>
            <p className="text-sm">3:00</p>
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
