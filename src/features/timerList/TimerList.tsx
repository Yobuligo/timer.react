import { ReactComponent as AddIcon } from "../../assets/add.svg";
import { TimerItem } from "../timerItem/timerItem/TimerItem";
import { ITimerListProps } from "./ITimerListProps";
import styles from "./Timer.module.scss";

export const TimerList: React.FC<ITimerListProps> = (props) => {
  const items = props.timerConfigs.map((timerConfig) => (
    <TimerItem
      isRunning={props.runningTimerConfig === timerConfig}
      key={timerConfig.id}
      onChange={props.onChange}
      onDelete={props.onDelete}
      onStart={props.onStart}
      runtime={props.runtime}
      timerConfig={timerConfig}
    />
  ));

  return (
    <div className={styles.timerList}>
      {items}
      {items.length === 0 && (
        <div className={styles.noTimerMessage}>Press + to add a new timer</div>
      )}
      <div className={styles.buttonPanel}>
        <AddIcon className={styles.addTimerButton} onClick={props.onAdd} />
      </div>
    </div>
  );
};
