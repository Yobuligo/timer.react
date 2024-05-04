import { useId } from "react";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import { ReactComponent as PlayIcon } from "../../assets/play.svg";
import { Card } from "../../components/Card";
import { Sound } from "../../types/Sound";
import { SoundSelector } from "../soundSelector/SoundSelector";
import { ITimerItemProps } from "./ITimerItemProps";
import styles from "./TimerItem.module.scss";

export const TimerItem: React.FC<ITimerItemProps> = (props) => {
  const inputId = useId();

  const onChangeTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.timerConfig.time = parseInt(event.target.value);
    props.onChange(props.timerConfig);
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.timerConfig.title = event.target.value;
    props.onChange(props.timerConfig);
  };

  const onDelete = () => {
    const confirmed = window.confirm("Would you really like to delete?");
    if (confirmed) {
      props.onDelete(props.timerConfig);
    }
  };

  const onStart = () => props.onStart(props.timerConfig);

  return (
    <Card className={styles.timerItem}>
      <div>
        <div className={styles.header}>
          <div className={styles.seconds}>
            <input
              className={styles.inputSeconds}
              id={inputId}
              min={0}
              onChange={onChangeTime}
              type="number"
              value={props.timerConfig.time}
            />
            s
          </div>

          {props.isRunning ? (
            <>
              <div className={styles.runtime}>{props.runtime} s</div>
              <PlayIcon width={"2rem"} />
            </>
          ) : (
            <>
              <>
                <SoundSelector
                  initialSound={props.timerConfig.sound}
                  onSelect={(sound) => {
                    props.timerConfig.sound = Sound[sound] as unknown as Sound;
                    props.onChange(props.timerConfig);
                  }}
                />
              </>
              <div>
                <PlayIcon width={"2rem"} onClick={onStart} />
                <DeleteIcon width={"2rem"} onClick={onDelete} />
              </div>
            </>
          )}
        </div>
      </div>

      <input
        className={styles.inputDescription}
        onChange={onChangeTitle}
        type="text"
        value={props.timerConfig.title}
      />
    </Card>
  );
};
