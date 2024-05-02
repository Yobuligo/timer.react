import { useState } from "react";
import { ITimer } from "../../model/ITimer";
import { Timer } from "../timer/Timer";
import { ITimerListProps } from "./ITimerListProps";
import styles from "./Timer.module.scss";

export const TimerList: React.FC<ITimerListProps> = (props) => {
  const [timers, setTimers] = useState<ITimer[]>([]);

  const onAddTimer = () => {
    setTimers((previous) => [...previous, { time: 0 }]);
  };

  const items = timers.map((timer, index) => <Timer timer={timer} />);

  return (
    <div className={styles.timerList}>
      <div>
        <button onClick={onAddTimer}>Add Timer</button>
      </div>
      {items}
    </div>
  );
};
