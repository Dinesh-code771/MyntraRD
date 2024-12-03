import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoBagOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setMenuButtonClicked } from "../Redux/navBarSlice";
import Search from "./Search";
export default function Navbar() {
  const isMenuBarOpen = useSelector(
    (state: any) => state.navBarSlice.isMenuButtonClicked
  );
  const dispatch = useDispatch();

  return (
    <nav className="sticky top-0 bg-white shadow-md w-full">
      <div className="wrapper py-5 w-[85%] md:w-[90%] mx-auto flex justify-between items-center">
        {/* left side */}
        <div className="leftWrapper flex items-center gap-5 md:gap-10 flex-1">
          <div
            onClick={() => {
              dispatch(setMenuButtonClicked(!isMenuBarOpen));
            }}
            className="block md:hidden"
          >
            <GiHamburgerMenu size={20} />
          </div>
          <img src="myntraIcon.png" width={30} height={30} alt="myntra icon" />
          <div className="hidden md:flex">
            <ul className="text-black font-bold flex gap-5">
              <li className="inline-block px-3 py-1 text-sm text-gray-700 cursor-pointer">
                Men
              </li>
              <li className="inline-block px-3 py-1 text-sm text-gray-700 cursor-pointer">
                Women
              </li>
              <li className="inline-block px-3 py-1 text-sm text-gray-700 cursor-pointer">
                Kids
              </li>
              <li className="inline-block px-3 py-1 text-sm text-gray-700 cursor-pointer">
                Beauty
              </li>
            </ul>
          </div>
        </div>

        {/* right side */}
        <div className="rightWrapper md:flex md:items-center md:gap-10 flex-1 justify-end ">
          <Search
            className="px-3 border bg-[#f5f5f6] rounded-md w-[80%]   hidden md:flex border-gray-300 md:items-center md:gap-5"
            placeholder="Search for products, brands and more"
          />
          <div className="icons flex justify-end gap-5">
            <LuHeart size={20} />
            <IoBagOutline size={20} />
            <div className="hidden md:inline">
              <CiUser size={20} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
