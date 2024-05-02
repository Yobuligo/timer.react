import { TimerItem } from "../timerItem/TimerItem";
import { ITimerListProps } from "./ITimerListProps";
import styles from "./Timer.module.scss";

export const TimerList: React.FC<ITimerListProps> = (props) => {
  const items = props.timers.map((timer, index) => (
    <TimerItem key={index} timer={timer} onChange={props.onChangeTimer} />
  ));

  return (
    <div className={styles.timerList}>
      <div>
        <button onClick={props.onAddTimer}>Add Timer</button>
      </div>
      {items}
    </div>
  );
};
