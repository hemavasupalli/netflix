const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 py-6 text-lg">{overview}</p>
      <div className="">
        <button className="p-4 px-12 text-xl text-black bg-white rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="p-4 px-12 mx-2 text-xl text-white bg-gray-500 bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;