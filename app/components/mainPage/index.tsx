import React, { FC } from "react";
import { useSelector } from "react-redux";
import { AppStateInterface } from "../../reducers";
import Announcements from "../announcements";
import NewJoiners from "../newJoiners";
import Polls from "../polls";

const MainPage: FC = () => {
  const user = useSelector((state: AppStateInterface) => state.user);

  return (
    <div>
      <Announcements />
      {user.isEmployee && <Polls />}
      <NewJoiners />
    </div>
  );
};
export default MainPage;
