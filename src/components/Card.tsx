import { useContext } from "react";

import { RegionContext } from "./HomePage";

import RandomCard from "./RandomCard";
import RegionCard from "./RegionCard";
import { fetchCountry } from "../utils";
import SearchedCountry from "./SearchedCountry";

const Card = () => {
  const { selectedRegion, inputValue } = useContext(RegionContext);

  if (inputValue.length > 0) {
    fetchCountry(inputValue);
    return <SearchedCountry />;
  }
  if (selectedRegion === "placeHolder" || selectedRegion === "") {
    return <RandomCard />;
  }

  return (
    <>
      <RegionCard />
    </>
  );
};
export default Card;
