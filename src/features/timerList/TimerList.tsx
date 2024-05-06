import { ReactComponent as AddIcon } from "../../assets/add.svg";
import { TimerItemDisplay } from "../timerItem/timerItemDisplay/TimerItemDisplay";
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
      onStart={props.onStart}
      runtime={props.runtime}
      timerConfig={timerConfig}
    />
  ));

  return (
    <div className={styles.timerList}>
      {items}
      <TimerItemDisplay timerConfig={props.timerConfigs[0]} />
      <div className={styles.buttonPanel}>
        <AddIcon className={styles.addTimerButton} onClick={props.onAdd} />
      </div>
    </div>
  );
};
