import { memo, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import cx from "classnames";

function Navbar() {
  const [kebab, setKebab] = useState(false);

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

  const handleKebab = () => setKebab((prev) => !prev);

  const renderNavBarOptions = () =>
    navBarItems.map(({ title, iconPath, path }) => (
      <Link href={path} className="flex items-center gap-5" key={title}>
        <Image src={iconPath} alt="icon" width={18} height={18} />
        <p
          className={cx(
            "text-lg text-white hidden md:block",
            path && "font-bold"
          )}
        >
          {title}
        </p>
      </Link>
    ));

  const renderExtraOPtions = () => (
    <>
      <button className="text-white text-sm sm:hidden lg:block">Help</button>
      <button className="text-white text-sm sm:hidden lg:block">
        Contact Us
      </button>
    </>
  );

  const renderDesktopNavBar = () => (
    <nav className="bg-black rounded-[1.875rem] py-[3.75rem] px-[3.125rem] md:pr-[4.8125rem] hidden sm:flex flex-col items-start">
      <p className="text-white font-bold text-4xl mb-[3.75rem] hidden md:block">
        Board.
      </p>
      <p className="text-white font-bold text-4xl mb-[3.75rem] block md:hidden">
        B
      </p>
      <div className="flex-1 flex flex-col gap-10">{renderNavBarOptions()}</div>
      <div className="flex flex-col gap-10 items-start">{renderExtraOPtions()}</div>
    </nav>
  );

  const renderMobileNavBar = () => (
    <nav className="bg-black py-5 flex items-center sm:hidden fixed z-10 left-0 right-0 bottom-0 justify-around rounded-t-xl">
      {renderNavBarOptions()}
      <div className="relative">
        <Image
          src="/assets/icons/horizontal-kebab.svg"
          width={18}
          height={18}
          alt="icon"
          onClick={handleKebab}
        />
        {kebab && (
          <div className="absolute z-50 bg-black bottom-full w-32 border mb-5 right-0 rounded-lg flex flex-col items-center gap-2 py-2 divide-white">
            {renderExtraOPtions()}
          </div>
        )}
      </div>
    </nav>
  );

  return (
    <>
      {renderDesktopNavBar()}
      {renderMobileNavBar()}
    </>
  );
}

export default memo(Navbar);
