import { TimerItem } from "../timerItem/TimerItem";
import { ITimerListProps } from "./ITimerListProps";
import styles from "./Timer.module.scss";

export const TimerList: React.FC<ITimerListProps> = (props) => {
  const items = props.timerConfigs.map((timer) => (
    <TimerItem
      key={timer.id}
      timerConfig={timer}
      onChange={props.onChange}
      onDelete={props.onDelete}
    />
  ));

  return (
    <div className={styles.timerList}>
      <div>
        <button onClick={props.onAdd}>Add Timer</button>
      </div>
      {items}
    </div>
  );
};
