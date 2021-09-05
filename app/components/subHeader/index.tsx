import cn from "classnames";
import css from "./../../containers/styles.css";
import React, { FC } from "react";

interface Props {
  image: string;
  heading: string;
}
const SubHeader: FC<Props> = ({ image, heading }) => {
  return (
    <div className={cn(css.heading)}>
      <div>
        <img src={image} className={cn(css.headingImage)} />
      </div>
      <div>
        <span className={cn(css.headingText)}>{heading}</span>
      </div>
    </div>
  );
};
export default SubHeader;
