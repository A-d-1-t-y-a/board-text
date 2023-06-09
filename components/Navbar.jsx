import { memo } from "react";

import Image from "next/image";
import Link from "next/link";

import cx from "classnames";

function Navbar() {
  const navBarItems = [
    {
      title: "Dashboard",
      iconPath: "assets/icons/dashboard-icon.svg",
      path: "/dashboard",
    },
    {
      title: "Transactions",
      iconPath: "assets/icons/transactions-icon.svg",
      path: "",
    },

    {
      title: "Schedules",
      iconPath: "assets/icons/schedule-icon.svg",
      path: "",
    },
    { title: "Users", iconPath: "assets/icons/user-icon.svg", path: "" },
    {
      title: "Settings",
      iconPath: "assets/icons/setting-icon.svg",
      path: "",
    },
  ];

  return (
    <nav className="bg-black md:w-[17.5rem] rounded-[1.875rem] py-[3.75rem] pl-[3.125rem] sm:pr-[3.125rem]  flex flex-col items-start">
      <p className="text-white font-bold text-4xl mb-[3.75rem] hidden md:block">Board.</p>
      <p className="text-white font-bold text-4xl mb-[3.75rem] block md:hidden">B</p>
      <div className="flex-1">
        {navBarItems.map(({ title, iconPath, path }) => (
          <Link
            href={path}
            className="flex items-center gap-5 mb-10"
            key={title}
          >
            <Image src={iconPath} alt="icon" width={18} height={18} />
            <p className={cx("text-lg text-white hidden md:block", path && "font-bold")}>
              {title}
            </p>
          </Link>
        ))}
      </div>
      <button className="text-white text-sm mb-5 sm:hidden lg:block">Help</button>
      <button className="text-white text-sm sm:hidden lg:block">Contact Us</button>
    </nav>
  );
}

export default memo(Navbar);
