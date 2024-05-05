import { useId } from "react";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import { ReactComponent as PlayIcon } from "../../assets/play.svg";
import { Card } from "../../components/card/Card";
import { Sound } from "../../types/Sound";
import { style } from "../../utils/style";
import { SoundSelector } from "../soundSelector/SoundSelector";
import { ITimerItemProps } from "./ITimerItemProps";
import styles from "./TimerItem.module.scss";

export const TimerItem: React.FC<ITimerItemProps> = (props) => {
  const inputId = useId();

  const onChangeTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.timerConfig.duration = parseInt(event.target.value);
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
      <input
        className={styles.inputDescription}
        onChange={onChangeTitle}
        type="text"
        value={props.timerConfig.title}
      />

      <div className={styles.header}>
        <div className={styles.seconds}>
          <input
            className={styles.inputSeconds}
            id={inputId}
            min={0}
            onChange={onChangeTime}
            type="number"
            value={props.timerConfig.duration}
          />
          <div className={styles.unit}>s</div>
        </div>

        {props.isRunning ? (
          <>
            <div className={styles.runtime}>{props.runtime} s</div>
            <PlayIcon className={style(styles.playIcon, styles.icon)} />
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
              <PlayIcon
                className={style(styles.playIcon, styles.icon)}
                onClick={onStart}
              />
              <DeleteIcon
                className={style(styles.deleteIcon, styles.icon)}
                onClick={onDelete}
              />
            </div>
          </>
        )}
      </div>
    </Card>
  );
};
