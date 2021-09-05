import cn from "classnames";
import css from "./../../containers/styles.css";
import React, { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IAnnouncement, useAnnouncements } from "../../hooks";
import SubHeader from "../subHeader";

const Announcements: FC = () => {
  const [announcements, setAnnouncements] = useState<Array<IAnnouncement>>([]);
  const {
    res: { loading, data },
  } = useAnnouncements();

  const getAnnouncementBox = (element: IAnnouncement, index: number) => (
    <div key={`Announcement${index}`} className={cn(css.announcementBox)}>
      <p className={cn(css.announcementType)}>{element.type}</p>
      <p className={cn(css.announcementName)}>{element.name}</p>
      <p className={cn(css.announcementDate)}>{element.date}</p>
    </div>
  );
  useEffect(() => {
    if (!loading && data) {
      console.log(data);
      setAnnouncements(data);
    }
  }, [data]);

  return (
    <div className={cn(css.mainPanel)}>
      <SubHeader image="/images/notification.png" heading="News & Updates" />
      <div>
        {announcements.map((data, index) => getAnnouncementBox(data, index))}
      </div>
    </div>
  );
};
export default Announcements;
