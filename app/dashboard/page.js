"use client";

import {
  // useEffect, useRef,
  useState,
} from "react";

// import { signOut, useSession } from "next-auth/react";

import Image from "next/image";
import dynamic from "next/dynamic";

import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import StatusCard from "@/components/StatusCard";
import ScheduleCard from "@/components/ScheduleCard";
import Loading from "@/components/Loading";

const PieChart = dynamic(() => import("@/components/PieChart"), {
  ssr: false,
});
const LineChart = dynamic(() => import("@/components/LineChart"), {
  ssr: false,
});

const scheduleData = [
  {
    borderColor: "border-[#9BDD7C]",
    title: "Meeting with suppliers from Kuta Bali",
    time: "14.00-15.00",
    description: "at Sunset Road, Kuta, Bali",
  },
  {
    borderColor: "border-[#6972C3]",
    title: "Check operation at Giga Factory 1",
    time: "18.00-20.00",
    description: "at Central Jakarta",
  },
];

const statusCards = [
  {
    bgColor: "bg-tCardBg",
    iconName: "card-icon.svg",
    title: "Total Revenues",
    value: "$2,129,430",
  },
  {
    bgColor: "bg-tCardBg2",
    iconName: "transaction-icon.svg",
    title: "Total Transactions",
    value: "1,520",
  },
  {
    bgColor: "bg-tCardBg3",
    iconName: "thumbs-up-icon.svg",
    title: "Total Likes",
    value: "9,721",
  },
  {
    bgColor: "bg-tCardBg4",
    iconName: "users-icon.svg",
    title: "Total Users",
    value: "892",
  },
];

export default function Home() {
  // const { data: session } = useSession();

  // const ref = useRef(null);

  // const [kebab, setKebab] = useState(false);
  const [search, setSearch] = useState(false);
  // const [refWidth, setRefWidth] = useState(null);

  // const handleKebab = () => setKebab((prev) => !prev);
  const handleSearch = () => setSearch((prev) => !prev);

  const renderSearchBar = () => (
    <Input
      placeholder="Search..."
      className="text-black bg-white"
      type="text"
      iconName="search-icon.svg"
      wrapperClassName="bg-white py-1 w-full"
    />
  );

  const renderPieChat = () => (
    <div className="bg-white rounded-[1.25rem] p-5 sm:py-[1.875rem] sm:px-10">
      <div className="flex w-full items-center mb-3 sm:mb-5">
        <p className="text-black font-bold text-lg flex-1">Top products</p>
        <button className="text-subTitle text-xs flex items-center gap-2">
          May - June 2021
          <Image
            alt="icon"
            src="assets/icons/right-cap-icon.svg"
            width={5}
            height={5}
            className="rotate-90"
          />
        </button>
      </div>
      <PieChart />
    </div>
  );

  const renderTodaySchedule = () => (
    <div className="bg-white rounded-[1.25rem] p-5 sm:py-[1.875rem] sm:px-10">
      <div className="flex items-center">
        <p className="text-black font-bold text-lg flex-1">Today’s schedule</p>
        <button className="text-subTitle text-xs flex items-center gap-2">
          See All
          <Image
            alt="icon"
            src="assets/icons/right-cap-icon.svg"
            width={5}
            height={5}
          />
        </button>
      </div>
      <div className="flex flex-col gap-3 mt-3 sm:mt-6">
        {scheduleData.map((item) => (
          <ScheduleCard props={item} key={item.title} />
        ))}
      </div>
    </div>
  );

  const renderNavbar = () => (
    <div
      className="flex items-center mb-5 sm:mb-10"
      // ref={ref}
    >
      <p className="flex-1 font-bold text-black text-xl">
        Dashboard
      </p>
      <div className="hidden sm:block">{renderSearchBar()}</div>
      <button
        className="p-2 mx-3 sm:hidden bg-white rounded-full flex items-center justify-center"
        onClick={handleSearch}
      >
        <Image
          src="assets/icons/search-icon.svg"
          alt="icon"
          width={20}
          height={20}
        />
      </button>
      <Image
        src="assets/icons/bell-icon.svg"
        alt="icon"
        width={20}
        height={20}
        className="mx-3 sm:mx-5"
      />
      <div className="relative">
        <Image
          alt="failed"
          src={
            // session?.user
            // ? session?.user?.image
            // :
            "http://3.bp.blogspot.com/-As-olkkh0no/T1RWk2I53HI/AAAAAAAAQsI/vSU73goD6Jo/s1600/BEN10+18.jpg"
          }
          width={30}
          height={30}
          className="object-cover aspect-square rounded-full"
          // onClick={handleKebab}
        />
        {/* {kebab && session?.user && (
          <div className="absolute max-[540px]:top-full min-[540px]:bottom-full right-0 flex items-center justify-center z-10 my-3 shadow-md border bg-slate-200 rounded-md p-3 w-40 min-[540px]:w-full ">
            <button
              className="bg-primary text-white font-medium text-base py-2 px-8 rounded-full whitespace-nowrap w-full"
              onClick={signOut}
            >
              Sign Out
            </button>
          </div>
        )} */}
      </div>
    </div>
  );

  const renderStatusCards = () => (
    <div className="grid xl:grid-cols-4 xl:grid-row-1 grid-row-4 grid-col-0 grid-flow-dense justify-items-stretch gap-2 sm:gap-9">
      {statusCards.map(({ bgColor, iconName, title, value }) => (
        <StatusCard
          key={title}
          bgColor={bgColor}
          iconName={iconName}
          title={title}
          value={value}
        />
      ))}
    </div>
  );

  const renderLineChart = () => (
    <div className="my-3 sm:my-10 p-5 sm:py-[1.875rem] sm:px-10 bg-white rounded-[1.25rem]">
      <div className="flex items-center">
        <div className="flex-1">
          <p className="text-black font-bold text-lg flex-1">Activities</p>
          <button className="text-subTitle text-sm flex items-center gap-1 mt-1">
            May - June 2021
            <Image
              alt="icon"
              src="assets/icons/right-cap-icon.svg"
              width={5}
              height={5}
              className="rotate-90"
            />
          </button>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-[0.625rem] mr-4 md:mr-8">
            <div className="w-[0.625rem] h-[0.625rem] bg-[#E9A0A0] rounded-full" />
            <p className="text-black text-sm">Guest</p>
          </div>
          <div className="flex items-center gap-[0.625rem] mr-4 md:mr-8">
            <div className="w-[0.625rem] h-[0.625rem] bg-[#9BDD7C] rounded-full" />
            <p className="text-black text-sm">User</p>
          </div>
        </div>
      </div>
      <LineChart />
      {/* <LineChart refWidth={refWidth} /> */}
    </div>
  );

  const renderTopProductsAndSchedule = () => (
    <div className="grid grid-rows-2 grid-cols-1 xl:grid-cols-2 xl:grid-rows-1 grid-flow-dense justify-center md:justify-stretch items-start md:items-stretch gap-3 sm:gap-10 sm:mb-10">
      {renderPieChat()}
      {renderTodaySchedule()}
    </div>
  );

  const renderMobileViewSearch = () =>
    search && (
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 p-4">
        <div className="bg-subTitle opacity-90 h-full w-full absolute -z-10 top-0 left-0 right-0 bottom-0 rounded-2xl" />
        <p className="text-center text-xl font-bold mb-4 text-white">
          Search Here ...
        </p>
        <div className="flex items-center w-full gap-4">
          <button className="bg-white rounded-full p-1" onClick={handleSearch}>
            <Image
              alt="icon"
              src="assets/icons/left-arrow.svg"
              width={20}
              height={20}
            />
          </button>
          <div className="flex-1">{renderSearchBar()}</div>
        </div>
      </div>
    );

  const renderRightSidePart = () => (
    <div className="flex-1 mobile:mb-6 sm:mb-0">
      {renderNavbar()}
      {renderStatusCards()}
      {renderLineChart()}
      {renderTopProductsAndSchedule()}
      {renderMobileViewSearch()}
    </div>
  );

  // useEffect(() => {
  //   console.log("it is called");
  //   const handleResize = () => {
  //     if (ref && ref.current && ref.current.offsetWidth) {
  //       setRefWidth(ref.current.offsetWidth);
  //       console.log(ref.current.offsetWidth);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // return () => {
  //   //   window.addEventListener("resize", handleResize);
  //   // };
  // }, [window]);

  // console.log(refWidth);

  if (typeof window !== "undefined" && window.innerHeight)
    return (
      <div className="lg:p-10 p-2 sm:p-4 flex gap-[3.75rem]">
        <Navbar />
        {renderRightSidePart()}
      </div>
    );
  else return <Loading />;
}
