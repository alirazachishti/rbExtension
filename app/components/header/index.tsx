import cn from "classnames";
import React, { FC } from "react";
// @ts-ignore
import css from "./../../containers/styles.css";

const Header: FC = () => {
  return (
    <div className={cn(css.header)}>
      <header>
        <span className={css.headerTag}>Welcome To </span>
        <img src={`/images/logo.png`} />
      </header>
    </div>
  );
};
export default Header;
