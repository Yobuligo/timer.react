import { useId } from "react";
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

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.timerConfig.title = event.target.value;
    props.onChange(props.timerConfig);
  };

  return (
    <Card>
      <div className={styles.timerItem}>
        <div>
          <label className={styles.label} htmlFor={inputId}>
            Time in min
          </label>
          <input
            className={styles.input}
            id={inputId}
            min={0}
            onChange={onChangeTime}
            type="number"
          />
        </div>
        <input type="text" onChange={onChangeText} />
        <SoundSelector
          onSelect={(sound) => {
            props.timerConfig.sound = Sound[sound] as unknown as Sound;
            props.onChange(props.timerConfig);
          }}
        />
      </div>
    </Card>
  );
};
