import GptSearch from "./GptSearch";
import Header from "./Header";
import MainBrowse from "./MainBrowse";
import { useSelector } from "react-redux";

const Browse = () => {
  const { isGPTSearch } = useSelector((state) => state.appConfig);
  return (
    <div>
      <Header />
      {isGPTSearch ? <GptSearch /> : <MainBrowse />}
    </div>
  );
};

export default Browse;
