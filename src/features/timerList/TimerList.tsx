import { useState } from "react";
import { ITime } from "../../model/ITime";
import { Sound } from "../../types/Sound";
import { TimerItem } from "../timerItem/TimerItem";
import { ITimerListProps } from "./ITimerListProps";
import styles from "./Timer.module.scss";

export const TimerList: React.FC<ITimerListProps> = (props) => {
  const [timers, setTimers] = useState<ITime[]>([]);

  const onAddTimer = () => {
    setTimers((previous) => [...previous, { time: 0, sound: Sound.FIRST }]);
  };

  const items = timers.map((timer, index) => (
    <TimerItem key={index} timer={timer} />
  ));

  return (
    <div className={styles.timerList}>
      <div>
        <button onClick={onAddTimer}>Add Timer</button>
      </div>
      {items}
    </div>
  );
};
