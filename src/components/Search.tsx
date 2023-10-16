import { BsSearch } from "react-icons/bs";

interface SelectComponentProps {
  selectedRegion: string;
  setSelectedRegion: (Region: string) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const Search = ({
  selectedRegion,
  setSelectedRegion,
  inputValue,
  setInputValue,
}: SelectComponentProps) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="flex  px-11 my-10 flex-col sm:flex-row md:p-0 md:max-w-screen-xl md:justify-between md:items-baseline mx-auto">
        <div className="search flex items-center  md:w-1/2">
          <BsSearch className=" absolute ml-2.5" />
          <input
            className=" p-4 pl-8 w-full rounded-lg shadow-md placeholder-slate-800 focus:outline-none focus:ring-1 dark:bg-[var(--Dark-Blue)] dark:placeholder-white placeholder:text-sm"
            type="text"
            name="search"
            placeholder=" Search For a Country"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="filter mt-10 mb-5 md:w-2/5 md:flex md:justify-end ">
          <select
            value={selectedRegion}
            onChange={handleSelectChange}
            className=" w-3/5 p-4 rounded-lg shadow-md dark:bg-[var(--Dark-Blue)] dark:placeholder-white focus:outline-none "
          >
            <option value="placeHolder">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default Search;
