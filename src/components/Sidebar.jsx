import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  IoCalendarOutline,
  IoCallOutline,
  IoChatboxOutline,
} from "react-icons/io5";

const Sidebar = () => {
  const sideMenu = [
    { name: "Activity", icon: <IoMdNotificationsOutline size={20} /> },
    { name: "Char", icon: <IoChatboxOutline size={20} /> },
    { name: "Calendar", icon: <IoCalendarOutline size={20} /> },
    { name: "Call", icon: <IoCallOutline size={20} /> },
  ];
  return (
    <nav className="w-[5rem] h-full absolute flex bg-[#161313] drop-shadow-xl">
      <ul className="text-white">
        {sideMenu.map((m, i) => (
          <li className="p-2 flex flex-col items-center" key={i}>
            {m.icon} <span className="text-sm">{m.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
