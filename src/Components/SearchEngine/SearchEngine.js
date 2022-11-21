import "./SearchEngine.scss";
import { useMediaQuery } from "react-responsive";
import SearchEngineMobile from "./SearchEngineMobile/SearchEngineMobile";
import SearchEngineDesktop from "./SearchEngineDesktop/SearchEngineDesktop";

const SearchEngine = () => {
  return (
    <div className="searchEngine">
      {useMediaQuery({ maxWidth: 1200 }) && <SearchEngineMobile/>}
      {!useMediaQuery({ maxWidth: 1200 }) && <SearchEngineDesktop/>}
    </div>
  );
};

export default SearchEngine;
