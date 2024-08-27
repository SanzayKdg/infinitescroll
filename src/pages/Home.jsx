import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleVisit = (path) => {
    navigate(path);
  };
  return (
    <div className="h-screen w-full p-8 flex items-center justify-center flex-col gap-4">
      <h1 className="text-center text-5xl font-semibold">
        Welcome to the Home Page
      </h1>

      <div className="flex w-1/2 p-4 gap-4 h-1/2">
        <div className="flex-[0.5] p-4 w-full h-full border-blue-gray-500 rounded-lg border flex-col flex items-center justify-center gap-4">
          <h3 className="text-2xl font-semibold">
            Visit Infinite Scroll Example
          </h3>
          <button
            className="px-16 py-4 rounded-lg shadow-md bg-[#28282b] text-white text-xl hover:bg-white hover:text-[#28282b] border-[#28282b] border-2 transition-colors ease-linear duration-300"
            onClick={() => handleVisit("/infinite-scroll")}
          >
            Visit
          </button>
        </div>
        <div className="flex-[0.5] p-4 w-full h-full border-blue-gray-500 rounded-lg border flex-col flex items-center justify-center gap-4">
          <h3 className="text-2xl font-semibold">Visit Observer Example</h3>
          <button
            className="px-16 py-4 rounded-lg shadow-md bg-[#28282b] text-white text-xl hover:bg-white hover:text-[#28282b] border-[#28282b] border-2 transition-colors ease-linear duration-300"
            onClick={() => handleVisit("/observer")}
          >
            Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
