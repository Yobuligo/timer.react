import { Card } from "../../components/card/Card";
import { EditIcon } from "../../components/icons/EditIcon";
import { PlayIcon } from "../../components/icons/PlayIcon";
import { TimerConverter } from "../../services/TimeConverter";
import styles from "./DisplayCard.module.scss";
import { IDisplayCardProps } from "./IDisplayCardProps";

export const DisplayCard: React.FC<IDisplayCardProps> = (props) => {
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
