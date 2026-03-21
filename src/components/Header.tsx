import logo from "./../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const menu = [
    { name: "Home", icon: HiHome },
    { name: "Search", icon: HiMagnifyingGlass },
    { name: "Watchlist", icon: HiPlus },
    { name: "Originals", icon: HiStar },
    { name: "Movies", icon: HiPlayCircle },
    { name: "TV Shows", icon: HiTv },
  ];

  return (
    <div className="flex justify-between p-5">
      <div className="flex items-center gap-8">
        <img
          src={logo}
          className="w-20 md:w-24 object-cover"
          alt="Disney Logo"
        />
        {menu.map((item) => (
          <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
        ))}
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
