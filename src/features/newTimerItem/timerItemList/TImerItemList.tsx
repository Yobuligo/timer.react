import { TimerItem } from "../timerItem/TimerItems";
import { ITimerItemListProps } from "./ITimerItemListProps";
import styles from "./TimerList.module.scss";

export const TimerItemList: React.FC<ITimerItemListProps> = (props) => {
  const items = props.timerConfigs.map((timerConfig, index) => (
    <TimerItem key={index} timerConfig={timerConfig} />
  ));

  return <div className={styles.timerItemList}>{items}</div>;
};
