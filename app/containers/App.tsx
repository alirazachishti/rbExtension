import cn from "classnames";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header";
import Login from "../components/login";
import MainPage from "../components/mainPage";
import { AppStateInterface } from "../reducers";
// @ts-ignore
import css from "./styles.css";

const App: FC = () => {
  const user = useSelector((state: AppStateInterface) => state.user);
  return (
    <div className={cn(css.mainPage)}>
      <Header />
      {user?.email ? <MainPage/> : <Login />}
    </div>
  );
};
export default App;
