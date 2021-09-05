import React, { FC, Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IPoll, IPostPoll, pollOptions, usePoll } from "../../hooks";
import cn from "classnames";
import css from "./../../containers/styles.css";
import SubHeader from "../subHeader";

const Polls: FC = () => {
  const [polls, setPolls] = useState<Array<IPoll>>([]);
  const {
    res: { loading, data },
  } = usePoll();

  const handleSubmit = (result: IPostPoll) => {
    console.log(result);
  };

  const getPollOption = (text: string, value: number) => (
    <button onClick={() => handleSubmit({ [text]: true })}>
      {text}
      <span>({value})</span>
    </button>
  );
  useEffect(() => {
    if (!loading && data) {
      setPolls(data);
    }
  }, [data]);

  return (
    <div className={cn(css.mainPanel)}>
      <SubHeader image="/images/Star.png" heading="Polls" />
      {polls.map((poll) => (
        <div key={`Poll${poll._id}`}>
          <p>{poll.name}</p>
          {Object.values(pollOptions).map((data, i) => (
            <div key={`${poll._id}Options${i}`}>
              {getPollOption(data, poll[data])}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Polls;
