import { fetchRegion } from "../utils";
import { useState, useContext, useEffect } from "react";
import { RegionContext } from "./HomePage";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { data } from "./SearchedCountry";
const RegionCard = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const { selectedRegion } = useContext(RegionContext);
  const fetchingData = async () => {
    try {
      const data = await fetchRegion(selectedRegion);
      setCountries(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchingData();
  }, [selectedRegion]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {countries?.map((country: data) => {
        const { flags, name, population, region, capital } = country;
        return (
          <div
            key={Math.random()}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid content-between"
          >
            <Link to={`/${name.common}`}>
              <img className="rounded-t-lg" src={flags?.svg} alt="" />
            </Link>

            <div className="p-5">
              <a href={`/${name.common}`}>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {name.common}
                </h2>
              </a>

              <ul className="info mb-3 font-normal  ">
                <li className="text-black dark:text-gray-100 text-xl">
                  Population: {population.toLocaleString()}
                </li>
                <li className="text-black dark:text-gray-100 text-xl">
                  Region: {region}
                </li>
                <li className="text-black dark:text-gray-100 text-xl">
                  Capital: {capital}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default RegionCard;
