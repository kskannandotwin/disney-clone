import { useState } from "react";
import logo from "./../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "Home", icon: HiHome },
    { name: "Search", icon: HiMagnifyingGlass },
    { name: "Watchlist", icon: HiPlus },
    { name: "Originals", icon: HiStar },
    { name: "Movies", icon: HiPlayCircle },
    { name: "Series", icon: HiTv },
  ];

  return (
    <div className="flex justify-between p-5">
      <div className="flex items-center gap-8">
        <img
          src={logo}
          className="w-20 md:w-24 object-cover"
          alt="Disney Logo"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />,
          )}
          <div className="md:hidden" onClick={() => setToggle((prev) => !prev)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    ),
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://randomuser.me/api/portraits/women/1.jpg"
        className="w-10 h-10 rounded-full"
        alt="User Profile"
      />
    </div>
  );
};

export default Header;
