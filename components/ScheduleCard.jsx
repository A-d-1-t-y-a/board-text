import { memo } from "react";
import cx from "classnames";

function ScheduleCard({props}) {
    const {borderColor, title, time, description}=props

  return (
    <div className={cx("border-l-4 px-4 py-1 flex flex-col gap-1", borderColor)}>
      <p className="text-meetScheduleTitle font-bold text-sm">{title}</p>
      <p className="text-xs text-meetScheduleSubTitle">{time}</p>
      <p className="text-xs text-meetScheduleSubTitle">{description}</p>
    </div>
  );
}

export default memo(ScheduleCard);
