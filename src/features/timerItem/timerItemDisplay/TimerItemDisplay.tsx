import { EditIcon } from "../../../components/icons/EditIcon";
import { PlayIcon } from "../../../components/icons/PlayIcon";
import { TimerItemCard } from "../timerItemCard/TimerItemCard";
import { TimerItemWatch } from "../timerItemWatch/TimerItemWatch";
import { ITimerItemDisplayProps } from "./ITimerItemDisplayProps";
import styles from "./TimerItemDisplay.module.scss";

export const TimerItemDisplay: React.FC<ITimerItemDisplayProps> = (props) => {
  const onPlay = () => {
    props.onPlay?.(props.timerConfig);
  };

  return (
    <TimerItemCard>
      {props.timerConfig.title}
      <div className={styles.footer}>
        <TimerItemWatch seconds={props.timerConfig.duration} />
        {props.isRunning && <TimerItemWatch seconds={props.runtime} />}

        {props.isRunning ? (
          <PlayIcon />
        ) : (
          <div>
            <PlayIcon onClick={onPlay} />
            <EditIcon onClick={props.onEdit} />
          </div>
        )}
      </div>
    </TimerItemCard>
  );
};
