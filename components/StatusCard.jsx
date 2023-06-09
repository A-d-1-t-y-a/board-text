import { memo } from "react";

import Image from "next/image";

import cx from "classnames";

function StatusCard({ bgColor, iconName, title, value }) {
  return (
    <div className={cx("py-5 px-6 rounded-[1.25rem]", bgColor)}>
      <div className="flex justify-end">
        <Image
          src={"assets/icons/" + iconName}
          width={24}
          height={24}
          alt="icon"
        />
      </div>
      <p className="font-serif text-sm text-black mb-1">{title}</p>
      <p className="font-bold text-xl text-black font-sans">{value}</p>
    </div>
  );
}

export default memo(StatusCard);
