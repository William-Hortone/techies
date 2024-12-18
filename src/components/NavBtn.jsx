import React from "react";
import { FaRegEye } from "react-icons/fa";
import { GiSurroundedEye } from "react-icons/gi";
const NavBtn = ({ setShowMenu }) => {
  // const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between w-full h-16 px-0 lg:px-16 ">
        <button className="flex items-center gap-2 rounded-sm cursor-pointer app__button group">
          <div className="flex items-center w-[130px] md:w-[200px]  justify-start app__button-content bg-basic">
            <p className="whitespace-nowrap " style={{ color: "white" }}>
              RapidPay
            </p>
            <p className="whitespace-nowrap " style={{ color: "white" }}>
              RapidPay
            </p>
          </div>
        </button>

        <button
          onClick={() => setShowMenu(true)}
          className="flex items-center gap-2 p-4 rounded-sm cursor-pointer app__button group"
        >
          <div className="flex w-[130px] md:w-[200px] items-center  app__button-content bg-basic">
            <FaRegEye
              size={20}
              color="black"
              className="block transition-all duration-300 ease-in-out group-hover:hidden"
            />
            <GiSurroundedEye
              size={20}
              color="black"
              className="hidden transition-all duration-300 ease-in-out group-hover:block"
            />
            <div className="w-auto h-[100%] justify-self-end self-end">
              <p style={{ color: "white" }}>Menu</p>
              <p style={{ color: "white" }}>Menu </p>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default NavBtn;
