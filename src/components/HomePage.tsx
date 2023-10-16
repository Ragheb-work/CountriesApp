import { createContext, useState } from "react";

import CountryCards from "./CountryCards";
import Search from "./Search";

type ContextType = {
  selectedRegion: string;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const RegionContext = createContext<ContextType>({
  selectedRegion: "",
  setSelectedRegion: () => {},
  inputValue: "",
  setInputValue: () => {},
});
const HomePage = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <RegionContext.Provider
      value={{
        selectedRegion,
        setSelectedRegion,
        inputValue,
        setInputValue,
      }}
    >
      <div>
        <Search
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <CountryCards />
      </div>
    </RegionContext.Provider>
  );
};
export default HomePage;
