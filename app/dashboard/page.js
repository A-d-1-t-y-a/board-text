"use client";

// import { useState } from "react";

import { signOut, useSession } from "next-auth/react";

import Image from "next/image";

import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import StatusCard from "@/components/StatusCard";
import ScheduleCard from "@/components/ScheduleCard";
import dynamic from "next/dynamic";

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
  const { data: session } = useSession();

  // const [kebab, setKebab] = useState();

  // const handleKebab = () => setKebab((prev) => !prev);

  const renderPieChat = () => (
    <div className="bg-white rounded-[1.25rem] py-[1.875rem] px-10 min-w-[1440px]:w-[30rem] 2xl:w-full">
      <div className="flex w-full items-center mb-5">
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
    <div className="bg-white rounded-[1.25rem] py-[1.875rem] px-10 min-w-[1440px]:w-[30rem] 2xl:w-full">
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
      <div className="flex flex-col gap-3 mt-6">
        {scheduleData.map((item) => (
          <ScheduleCard props={item} key={item.title} />
        ))}
      </div>
    </div>
  );

  const renderRightSideHeader = () => (
    <div className="flex items-center mb-10">
      <p className="flex-1 font-bold text-black text-xl">Dashboard</p>
      <Input
        placeholder="Search..."
        className="text-black bg-white"
        type="text"
        iconName="search-icon.svg"
        wrapperClassName="bg-white py-1"
      />
      <Image
        src="assets/icons/bell-icon.svg"
        alt="icon"
        width={20}
        height={20}
        className="mx-5"
      />
      <div className="relative">
        <Image
          alt="failed"
          src={
            session?.user
              ? session?.user?.image
              : "http://3.bp.blogspot.com/-As-olkkh0no/T1RWk2I53HI/AAAAAAAAQsI/vSU73goD6Jo/s1600/BEN10+18.jpg"
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

  const renderRightSideCard = () => (
    <div className="grid xl:grid-cols-4 xl:grid-row-1 grid-row-4 grid-col-0 grid-flow-dense justify-items-stretch gap-9">
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

  const renderChat = () => (
    <div className="my-10 py-[1.875rem] px-10 bg-white rounded-[1.25rem]">
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
          <div className="flex items-center gap-[0.625rem] mr-8">
            <div className="w-[0.625rem] h-[0.625rem] bg-[#E9A0A0] rounded-full" />
            <p className="text-black text-sm">Guest</p>
          </div>
          <div className="flex items-center gap-[0.625rem] mr-8">
            <div className="w-[0.625rem] h-[0.625rem] bg-[#9BDD7C] rounded-full" />
            <p className="text-black text-sm">User</p>
          </div>
        </div>
      </div>
      <LineChart />
    </div>
  );

  const renderRightSideBottomPart = () => (
    <div className="grid grid-rows-2 grid-cols-1 xl:grid-cols-2 xl:grid-rows-1 grid-flow-dense justify-items-stretch gap-10 mb-10">
      {renderPieChat()}
      {renderTodaySchedule()}
    </div>
  );

  const renderRightSidePart = () => (
    <div className="flex-1">
      {renderRightSideHeader()}
      {renderRightSideCard()}
      {renderChat()}
      {renderRightSideBottomPart()}
    </div>
  );

  if (typeof window !== "undefined" && window.innerHeight)
    return (
      <main className="w-full lg:p-10 p-1 sm:p-2 flex bg-backgroundColor gap-[3.75rem]">
        <Navbar />
        {renderRightSidePart()}
      </main>
    );
  else return null;
}
