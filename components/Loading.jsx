import Image from "next/image";

function Loading() {
  return (
    <div className=" w-full h-screen flex items-center justify-center bg-black">
      <Image
        src="/assets/icons/Infinity-loading.svg"
        width={100}
        height={10}
        alt="icon"
      />
    </div>
  );
}

export default Loading;
