import { useSelector } from "react-redux";
import { gptInput } from "../utils/langConstant";

const GptInput = () => {
  const lang = useSelector((state) => state.appConfig.selectedLanguage);
  return (
    <div className="absolute top-20 text-white">
      <form>
        <input
          className="w-[500px] px-4 py-2 mr-4 text-black"
          type="text"
          placeholder={gptInput[lang].inputPlaceholder}
        />
        <button className="px-8 py-2 bg-red-700" type="submit">
          {gptInput[lang].buttonText}
        </button>
      </form>
    </div>
  );
};

export default GptInput;
