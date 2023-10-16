import { fetchCountry } from "../utils";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./Loading";
type QuizParams = {
  id: string;
};

type Language = {
  name: string;
};

interface Currency {
  name: string;
  symbol: string;
}

interface Currencies {
  [key: string]: Currency;
}

type CountryData = {
  flags: { svg: string };
  name: { common: string; official: string };
  population: string;
  region: string;
  capital: string[];
  tld: string[];
  currencies: Currencies;
  languages: Language;
  borders: string[];
};

const CountryDetails = () => {
  const { id } = useParams<QuizParams>();

  const [country, setCountry] = useState([]);
  const [loading, SetLoading] = useState(true);

  const fetchCountryDetails = async () => {
    try {
      const data = await fetchCountry(`${id}`);
      setCountry(data);
      SetLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      SetLoading(false);
    }
  };

  useEffect(() => {
    fetchCountryDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className=" lg:mb-20">
        <Link
          to={"/"}
          className=" flex items-center justify-center  w-48 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 m-8"
        >
          <svg
            className="w-5 h-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span>Go back</span>
        </Link>

        {country?.map((obj: CountryData) => {
          const { currencies, languages } = obj;

          const currencyValues = Object.values(currencies);

          const name = currencyValues[0].name;

          const language = Object.values(languages)[0];

          return (
            <div className="flex flex-col  lg:flex-row" key={Math.random()}>
              <div className="image m-auto lg:m-0 lg:p-8">
                <img
                  src={obj?.flags?.svg}
                  alt=""
                  className="lg:w-[700] lg:h-[450]"
                />
              </div>
              <div className="info py-4 px-[1.8rem] font-semibold lg:basis-2/5 lg:p-20">
                <div className="up  flex flex-col gap-6 mb-6 lg:flex-row lg:items-center lg:justify-between lg:mb-12">
                  <div className="right">
                    <h2
                      className=" font-extrabold text-2xl py-6
                    "
                    >
                      {obj?.name?.common}
                    </h2>
                    <h6>
                      Native:
                      <span className=" ">{obj?.name?.official}</span>
                    </h6>
                    <h6>
                      Population:
                      <span className=" ">
                        {obj?.population?.toLocaleString()}
                      </span>
                    </h6>
                    <h6>
                      Region: <span className=" ">{obj?.region}</span>
                    </h6>
                    <h6>
                      Capital: <span className=" ">{obj?.capital[0]}</span>
                    </h6>
                  </div>
                  <div className="left">
                    <h6 className=" lg:pt-12">
                      Top Level Domain: <span className=" ">{obj?.tld[0]}</span>
                    </h6>
                    <h6>
                      Currencies: <span className=" ">{name}</span>
                    </h6>
                    <h6>
                      Languages: <span className=" ">{language}</span>
                    </h6>
                  </div>
                </div>
                <div className="down">
                  <h2 className=" my-3">Border Countries :</h2>
                  <div className="bordr flex justify-between flex-wrap">
                    {obj?.borders?.map((country) => {
                      return (
                        <span
                          key={Math.random()}
                          className=" bg-white px-2.5 py-1 shadow-lg dark:bg-[rgb(17,24,39)]"
                        >
                          {country}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CountryDetails;
