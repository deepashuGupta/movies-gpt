import { LOGIN_BACKGROUND } from "../utils/constant";
import GptInput from "./GptInput";
import GptMovie from "./GptMovie";
import PopUp from "./PopUp";

const GptSearch = () => {
  return (
    <div className="relative">
      <img
        className="w-[100vw] h-[100vh] object-cover fixed"
        src={LOGIN_BACKGROUND}
        alt="background"
      />
      <div className="w-[100%] h-[100vh] fixed bg-black top-0 bg-opacity-80"></div>
      <div className="flex justify-center items-center">
        <GptInput />
      </div>
      <GptMovie />
      <PopUp />
    </div>
  );
};

export default GptSearch;
