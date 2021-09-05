import cn from "classnames";
import React, { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { INewJoiners, useNewJoiners } from "../../hooks";
import SubHeader from "../subHeader";
import css from "./../../containers/styles.css";

const NewJoiners: FC = () => {
  const [newJoiners, setNewJoiners] = useState<Array<any>>([]);
  const {
    res: { loading, data },
  } = useNewJoiners();

  const getAnnouncementBox = (element: INewJoiners) => (
    <div key={`Joiners${element._id}`}>
      <span>
        <img src={element.image} />
      </span>
      <div>
        <p>{element.name}</p>
        <p>{element.type}</p>
        <p>{element.date}</p>
      </div>
    </div>
  );
  useEffect(() => {
    if (!loading && data) {
      console.log(data);
      setNewJoiners(data);
    }
  }, [data]);

  return (
    <div className={cn(css.mainPanel)}>
      <SubHeader image="/images/Badge.png" heading="New Members" />
      <div>{newJoiners.map((data) => getAnnouncementBox(data))}</div>
    </div>
  );
};
export default NewJoiners;
