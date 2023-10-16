import { MdOutlineDarkMode } from "react-icons/md";

const a = document.getElementById("root");
const handleClick = () => {
  a?.classList.toggle("dark");
};

const Header = () => {
  return (
    <nav className="container flex justify-around h-[10vh] items-center bg-white dark:bg-[var(--Dark-Blue)] shadow-md min-w-[100%]">
      <div className="logo">
        <h2 className=" font-[800] text-[var(--Very-Drark-Blue)] dark:text-[var(--white)]">
          Where in the world?
        </h2>
      </div>
      <div className="darkModeBtn flex gap-3">
        <MdOutlineDarkMode size={23} />
        <button
          className="font-[600] text-[var(--Very-Drark-Blue)] dark:text-[var(--white)]"
          onClick={handleClick}
        >
          Dark Mode
        </button>
      </div>
    </nav>
  );
};
export default Header;
