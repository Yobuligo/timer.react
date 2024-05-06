import { Card } from "../../../components/card/Card";
import { EditIcon } from "../../../components/icons/EditIcon";
import { PlayIcon } from "../../../components/icons/PlayIcon";
import { TimerConverter } from "../../../services/TimeConverter";
import { ITimerItemDisplayProps } from "./ITimerItemDisplayProps";
import styles from "./TimerItemDisplay.module.scss";

export const TimerItemDisplay: React.FC<ITimerItemDisplayProps> = (props) => {
  return (
    <Card className={styles.displayCard}>
      {props.timerConfig.title}
      <div className={styles.footer}>
        <div className={styles.time}>
          {TimerConverter.secToMinAndSeconds(119)}
        </div>
        <div>
          <PlayIcon onClick={props.onPlay} />
          <EditIcon onClick={props.onEdit} />
        </div>
      </div>
    </Card>
  );
};
