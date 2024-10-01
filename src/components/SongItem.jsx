

const SongItem = ({name, image, description, id}) => {
  return (
    <div className="min-w-[180px] lg:w-32 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{description}</p>
    </div>
  )
}

export default SongItem
