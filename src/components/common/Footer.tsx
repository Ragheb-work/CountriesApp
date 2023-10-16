import {
  AiFillHeart,
  AiOutlineGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="  bg-white dark:bg-[var(--Dark-Blue)]  min-w-[100%] dark:shadow-none text-lg ">
        <div className="flex  justify-center items-center ">
          <h4>Made With</h4>
          <h4>
            <AiFillHeart className=" fill-red-600 m-auto" />
          </h4>
        </div>
        <div className="flex justify-center gap-2.5">
          <a
            href="https://www.facebook.com/rag.heb.5015"
            target="_blank"
            className=""
          >
            <BsFacebook size={25} className="fill-[#1877f2]" />
          </a>

          <a href="https://github.com/Ragheb-work" target="_blank" className="">
            <AiOutlineGithub
              size={25}
              className=" fill-[#333] dark:fill-[white]"
            />
          </a>

          <a
            href="https://twitter.com/Ragheb_Smari"
            target="_blank"
            className=""
          >
            <AiFillTwitterCircle size={25} className="fill-[#1da1f2]" />
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
