import { EditIcon } from "../../../components/icons/EditIcon";
import { PauseIcon } from "../../../components/icons/PauseIcon";
import { PlayIcon } from "../../../components/icons/PlayIcon";
import { ButtonPanel } from "../buttonPanel/ButtonPanel";
import { TimerItemCard } from "../timerItemCard/TimerItemCard";
import { TimerItemWatch } from "../timerItemWatch/TimerItemWatch";
import { ITimerItemDisplayProps } from "./ITimerItemDisplayProps";
import styles from "./TimerItemDisplay.module.scss";

export const TimerItemDisplay: React.FC<ITimerItemDisplayProps> = (props) => {
  const onPlay = () => props.onPlay?.(props.timerConfig);

  const onPause = () => props.onPause?.(props.timerConfig);

  return (
    <TimerItemCard isRunning={props.isRunning} sound={props.timerConfig.sound}>
      {props.timerConfig.title}
      <div className={styles.footer}>
        <TimerItemWatch seconds={props.timerConfig.duration} />
        {props.isRunning && <TimerItemWatch seconds={props.runtime} />}

        {props.isRunning ? (
          <div>
            {/* <ButtonPanel>
              <PauseIcon onClick={onPause} />
              <PlayIcon />
            </ButtonPanel> */}
          </div>
        ) : (
          <ButtonPanel>
            <PlayIcon onClick={onPlay} />
            <EditIcon onClick={props.onEdit} />
          </ButtonPanel>
        )}
      </div>
    </TimerItemCard>
  );
};
