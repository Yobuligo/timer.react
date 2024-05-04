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
    props.onDelete(props.timerConfig);
  };

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
            <PlayIcon width={"1.5rem"} />
          ) : (
            <>
              <div>
                <SoundSelector
                  initialSound={props.timerConfig.sound}
                  onSelect={(sound) => {
                    props.timerConfig.sound = Sound[sound] as unknown as Sound;
                    props.onChange(props.timerConfig);
                  }}
                />
              </div>
              <DeleteIcon width={"1.5rem"} onClick={onDelete} />
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
