import { TimerItem } from "../timerItem/TimerItem";
import { ITimerListProps } from "./ITimerListProps";
import styles from "./Timer.module.scss";

export const TimerList: React.FC<ITimerListProps> = (props) => {
  const items = props.timerConfigs.map((timerConfig) => (
    <TimerItem
      isRunning={props.runningTimerConfig === timerConfig}
      key={timerConfig.id}
      onChange={props.onChange}
      onDelete={props.onDelete}
      runtime={props.runtime}
      timerConfig={timerConfig}
    />
  ));

  return (
    <div className={styles.timerList}>
      {items}
      <div>
        <button className={styles.addTimerButton} onClick={props.onAdd}>Add Timer</button>
      </div>
    </div>
  );
};
