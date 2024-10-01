import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <>
        <div className="w-full flex justify-between items-center font-semibold">
            <div className="flex items-center gap-2">
                <img onClick={() => navigate(-1)} className="w-10 invert p-2  cursor-pointer hover:bg-slate-50 hover:rounded-2xl" src={assets.backward_button} alt="" />
                <img onClick={() => navigate(1)} className="w-10 invert p-2 rounded-2xl cursor-pointer hover:bg-slate-50 hover:rounded-2xl" src={assets.forward_button} alt="" />
            </div>

            <div className="flex items-center gap-4">
                <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">Explore Premium</p>
                <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">Beta Test</p>
                <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">S</p>
            </div>
        </div>

        <div className="flex items-center gap-2 mt-4">
            <p className="bg-white font-semibold text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
            <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
            <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcasting</p>
        </div>

        <div className="flex justify-center items-center lg:flex gap-2 mt-6">
            <span className="bg-[#1abc54] px-3 py-2 font-bold text-xs lg:w-full lg:justify-center inline-flex gap-2 sm:px-2 sm:min-w-fit">
            <img className="w-4 invert" src={assets.radio_ico} alt="" />
            New features will add on, your feedback is valuable.
            Dev:@satyajeetsinghz
            </span>
        </div>
    </>
  )
}

export default Navbar
