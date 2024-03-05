import { LOGIN_BACKGROUND } from "../utils/constant";
import GptInput from "./GptInput";

const GptSearch = () => {
  return (
    <div className="relative">
      <img
        className="w-[100vw] h-[100vh] object-fill"
        src={LOGIN_BACKGROUND}
        alt="background"
      />
      <div className="w-[100%] h-[100vh] absolute bg-black top-0 bg-opacity-70"></div>
      <div className="flex justify-center items-center">
        <GptInput />
      </div>
    </div>
  );
};

export default GptSearch;
