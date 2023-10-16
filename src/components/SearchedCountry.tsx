import { Link } from "react-router-dom";
import { fetchCountry } from "../utils";
import { useState, useEffect, useContext } from "react";
import Loading from "./Loading";
import { RegionContext } from "./HomePage";

export type data = {
  flags: { svg: string };
  name: { common: string };
  population: string;
  region: string;
  capital: string;
};

const SearchedCountry = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { inputValue } = useContext(RegionContext);
  const fetchCountries = async () => {
    try {
      const data = await fetchCountry(inputValue);
      setCountries(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCountries();
  }, [inputValue]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {countries.length > 0 ? (
        countries?.map((country: data) => {
          const { flags, name, population, region, capital } = country;
          return (
            <div
              key={Math.random()}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid content-between"
            >
              <Link to={`/${name.common}`}>
                <img className="rounded-t-lg" src={flags.svg} alt="" />
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
        })
      ) : (
        <div className="w-full max-w-[90%] rounded-lg bg-white p-4 py-6 shadow-xl ring-1 ring-slate-900/5 dark:bg-[var(--Dark-Blue)] dark:text-gray-100 dark:shadow-lg lg:max-w-[100%]">
          No Data Found
        </div>
      )}
    </>
  );
};
export default SearchedCountry;
