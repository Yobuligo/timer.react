import { TimerConverter } from "../../../services/TimeConverter";
import { ITimerItemWatchProps } from "./ITimerItemWatchProps";
import styles from "./TimerItemWatch.module.scss";

export const TimerItemWatch: React.FC<ITimerItemWatchProps> = (props) => {
  return (
    <div className={styles.watch}>
      {TimerConverter.secToMinAndSeconds(props.seconds)}
    </div>
  );
};
