import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardArrowRight } from "react-icons/md";
import { setMenuButtonClicked } from "../Redux/navBarSlice.js";
import { Link } from "react-router-dom";

export default function MSidebar() {
  const isMenuBarOpen = useSelector(
    (state: any) => state.navBarSlice.isMenuButtonClicked
  );
  const dispatch = useDispatch();

  return (
    <>
      {isMenuBarOpen && (
        <aside className=" absolute left-0 bottom-0 top-0 w-[75%] z-50 h-screen bg-white  border shadow-md overflow-scroll">
          <div className="wrapper">
            {/* profile container */}
            <div className="profileWrapper border p-4 bg-[#3f3947] text-white flex justify-between">
              <div className="left flex flex-col justify-center gap-5">
                <img
                  src="profile.jpg"
                  width={50}
                  height={50}
                  alt="profile"
                  className="rounded-sm border bg-white"
                />
                <h3 className="font-bold">Dinesh</h3>
              </div>
              <div className="right flex flex-col justify-between gap-5">
                <div
                  onClick={() => {
                    dispatch(setMenuButtonClicked(false));
                  }}
                  className="text-white"
                >
                  <IoClose size={30} color="#e4e3e5" />
                </div>
                <div>
                  <MdKeyboardArrowRight size={22} />
                </div>
              </div>
            </div>

            {/* menu items */}
            <div className="menuItems p-4 flex flex-col gap-5 border-b">
              <div className="item flex justify-between">
                <Link
                  to="/men"
                  onClick={() => {
                    dispatch(setMenuButtonClicked(false));
                  }}
                >
                  <h3 className="font-semibold text-black text-[0.8rem]">
                    Mens
                  </h3>
                </Link>
                <div>
                  <MdKeyboardArrowRight color="#bebfc6" size={22} />
                </div>
              </div>
              <div className="item flex justify-between">
                <h3 className="font-semibold text-black text-[0.8rem]">
                  Women
                </h3>
                <div>
                  <MdKeyboardArrowRight color="#bebfc6" size={22} />
                </div>
              </div>
              <div className="item flex justify-between">
                <h3 className="font-semibold text-black text-[0.8rem]">Kids</h3>
                <div>
                  <MdKeyboardArrowRight color="#bebfc6" size={22} />
                </div>
              </div>{" "}
              <div className="item flex justify-between">
                <h3 className="font-semibold text-black text-[0.8rem]">
                  Beaty
                </h3>
                <div>
                  <MdKeyboardArrowRight color="#bebfc6" size={22} />
                </div>
              </div>
            </div>

            {/* settiings */}
            <div className="settings p-4 flex flex-col gap-8">
              <div className="name">
                <h3 className="font text-[#858590] text-[0.8rem]">Accounts</h3>
              </div>
              <div className="name">
                <h3 className="font text-[#858590] text-[0.8rem]">Orders</h3>
              </div>{" "}
              <div className="name">
                <h3 className="font text-[#858590] text-[0.8rem]">
                  Myntra Studio
                </h3>
              </div>{" "}
              <div className="name">
                <h3 className="font text-[#858590] text-[0.8rem]">
                  Gift Cards
                </h3>
              </div>{" "}
              <div className="name">
                <h3 className="font text-[#858590] text-[0.8rem]">
                  Gift Cards
                </h3>
              </div>{" "}
              <div className="name">
                <h3 className="font text-[#858590] text-[0.8rem]">
                  Gift Cards
                </h3>
              </div>{" "}
              <div className="name">
                <h3 className="font text-[#858590] text-[0.8rem]">Legal</h3>
              </div>
              <div className="name">
                <h3 className="font text-[#858590] text-[0.8rem]">Legal</h3>
              </div>
              <div className="name">
                <h3 className="font text-[#858590] text-[0.8rem]">Legal</h3>
              </div>
              <div className="name">
                <h3 className="font text-[#858590] text-[0.8rem]">Legal</h3>
              </div>{" "}
              <div className="name">
                <h3 className="font text-[#858590] text-[0.8rem]">Legal</h3>
              </div>{" "}
            </div>

            {/* footer */}
            <div className="app-install-creative-container">
              <img
                className="app-install-creative-image"
                src="https://assets.myntassets.com/assets/images/retaillabs/2022/12/30/856cb741-8473-4d5e-b6e3-a52b3d98c99e1672386455977-PWA---App-Download-banner.png"
              />
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
