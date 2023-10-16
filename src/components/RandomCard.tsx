import { Link } from "react-router-dom";
import { fetchData } from "../utils";
import { useState, useEffect } from "react";
import Loading from "./Loading";

type destructuring = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

const RandomCard = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchCountries = async () => {
    try {
      const data = await fetchData(16);
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
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {countries.map((country: destructuring) => {
        const { flag, name, population, region, capital } = country;
        return (
          <div
            key={Math.random()}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid content-between"
          >
            <Link to={`/${name}`}>
              <img className="rounded-t-lg" src={flag} alt="" />
            </Link>

            <div className="p-5">
              <a href={`/${name}`}>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {name}
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
export default RandomCard;
