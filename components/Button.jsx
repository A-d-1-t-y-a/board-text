import Image from "next/image";
import cx from "classnames";

function Button({ imageIcon, title, className, onClick, ...restProps }) {
  return (
    <button
      className={cx("flex items-center", className)}
      onClick={onClick}
      {...restProps}
    >
      {imageIcon && (
        <Image
          src={"assets/icons/" + imageIcon}
          width={14}
          height={14}
          alt="icon"
        />
      )}
      <p>{title}</p>
    </button>
  );
}

export default Button;
